# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Direct enquiry email

The contact form posts JSON to `/api/contact`. The Node serverless handler in
`api/contact.js` is ready for Vercel; a static-only host cannot run this endpoint.
For Vercel, use the Vite preset (`npm run build`, output `dist`). For other hosts,
mount this handler using their Node API adapter or port it to their functions format.

Configure these **server-side** environment variables on the hosting service:

- `RESEND_API_KEY`: a Resend API key with sending access.
- `CONTACT_FROM_EMAIL`: a sender address on a domain verified with Resend, e.g.
  `Karon Estate Enterprice <enquiries@your-verified-domain.com>`.

Enquiries always go to `makonadu1997@gmail.com`; the visitor's email is used as
Reply-To. Never put provider keys in frontend code or `VITE_` variables. Redeploy
after configuring the environment. Use `vercel dev` for local end-to-end testing;
plain `vite` only serves the frontend. The form reports provider acceptance, not
inbox delivery. Verify live delivery after credentials and the sender are configured.
Enable host-level rate limiting for `/api/contact` before public traffic; the
handler validates inputs, checks browser origin, and includes a honeypot.
