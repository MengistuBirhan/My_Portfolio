# Portfolio website

React + Vite + TypeScript + Tailwind + Framer Motion, with Amharic/English switching.

## Run

```bash
npm install
cp .env.example .env   # then add your Web3Forms access key
npm run dev
```

## Edit

- Text (both languages): `src/i18n/translations.ts`
- Certificates: `src/data/certificates.ts`
- Resume: replace `public/resume.pdf`

## Contact form (Web3Forms)

Messages are emailed to mengistubirhan721@gmail.com through Web3Forms (free, no database).

1. Go to https://web3forms.com and enter mengistubirhan721@gmail.com.
2. The **Access Key** is sent to that inbox.
3. Put it in `.env`: `VITE_WEB3FORMS_ACCESS_KEY=your-key`
4. Restart `npm run dev`. On Vercel, add the same variable under Environment Variables.
