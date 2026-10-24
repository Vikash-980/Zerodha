# Zerodha

This repository contains three separately deployable applications:

- `backend/`: Express API with MongoDB
- `frontend/`: landing and authentication app
- `dashboard/`: trading dashboard

## Local development

1. Copy `backend/.env.example` to `backend/.env` and set `MONGO_URL` and a
   private `TOKEN_KEY`.
2. Optionally copy the frontend and dashboard `.env.example` files to `.env`
   in their respective directories when using non-default local ports.
3. Run `npm install` and `npm start` in each application directory. The default
   URLs are frontend `http://localhost:3000`, dashboard
   `http://localhost:3001`, and API `http://localhost:3002`.

Never commit `.env` files or put secret values in frontend environment
variables. `REACT_APP_*` variables are included in the public browser bundle.

## Render backend

The root `render.yaml` defines a Node web service rooted at `backend/`. Connect
the GitHub repository to Render and create the service from the Blueprint. Set
the following environment values in Render:

- `MONGO_URL`: MongoDB connection string
- `FRONTEND_URL`: deployed frontend origin, e.g. `https://your-frontend.vercel.app`
- `DASHBOARD_URL`: deployed dashboard origin, e.g. `https://your-dashboard.vercel.app`

Render generates `TOKEN_KEY` from the Blueprint. Keep it private. The service
health check is `/health`.

## Vercel frontend and dashboard

Create two Vercel projects from this repository:

1. Frontend project root directory: `frontend`
2. Dashboard project root directory: `dashboard`

For both projects, use the Create React App defaults (`npm run build`, output
directory `build`). Each app's `vercel.json` rewrites client-side routes to
`index.html`, so refreshing routes such as `/signup` or `/holdings` works.

Add this environment variable to **both** Vercel projects and redeploy after
setting it:

- `REACT_APP_API_URL`: the deployed Render API origin, without a trailing
  slash, e.g. `https://your-backend.onrender.com`

After a successful login, the frontend redirects to the deployed dashboard at
`https://zerodha-dash-c39sdkkw4-vikash-980s-projects.vercel.app/`.

The API allows the stable Vercel origins `https://zerodha.vercel.app` and
`https://zerodha-dash.vercel.app` by default, as well as the configured
`FRONTEND_URL` and `DASHBOARD_URL` origins. Set those Render values to the
exact deployed origins, especially when using preview deployments or custom
domains. The API uses secure cross-site cookies in production.
