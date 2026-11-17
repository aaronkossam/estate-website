import { test } from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/contact.js';

const valid = { name: 'Test Visitor', email: 'visitor@example.com', message: 'Please send property information.' };
async function invoke(body = valid, method = 'POST') {
  const res = { setHeader() {}, status(code) { this.code = code; return this; }, json(data) { this.data = data; return this; } };
  await handler({ method, headers: { 'content-type': 'application/json', origin: 'https://estate.example', host: 'estate.example' }, body }, res);
  return res;
}
test('contact API validates requests and only confirms accepted messages', async () => {
  const previousFetch = globalThis.fetch;
  const oldKey = process.env.RESEND_API_KEY;
  const oldFrom = process.env.CONTACT_FROM_EMAIL;
  try {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_FROM_EMAIL;
    assert.equal((await invoke(valid, 'GET')).code, 405);
    assert.equal((await invoke({ ...valid, email: 'invalid' })).code, 400);
    assert.equal((await invoke({ ...valid, message: 'a'.repeat(5001) })).code, 400);
    assert.equal((await invoke(valid)).code, 503);
    process.env.RESEND_API_KEY = 'test-only';
    process.env.CONTACT_FROM_EMAIL = 'sender@example.com';
    let payload;
    globalThis.fetch = async (_url, options) => {
      payload = JSON.parse(options.body);
      return { ok: true, json: async () => ({ id: 'accepted-test' }) };
    };
    assert.equal((await invoke()).data.success, true);
    assert.deepEqual(payload.to, ['makonadu1997@gmail.com']);
    assert.equal(payload.reply_to, valid.email);
    globalThis.fetch = async () => { throw new Error('provider failure'); };
    assert.equal((await invoke()).code, 502);
    assert.equal((await invoke({ ...valid, website: 'bot.example' })).code, 200);
  } finally {
    globalThis.fetch = previousFetch;
    if (oldKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = oldKey;
    if (oldFrom === undefined) delete process.env.CONTACT_FROM_EMAIL; else process.env.CONTACT_FROM_EMAIL = oldFrom;
  }
});
