// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'enrique',
      address: 'malaga',
      phone: 666555444,
      group: '',
    },
    {
      name: 'laura',
      address: 'granada',
      phone: 655444222,
      group: '',
    },
    {
      name: 'adrian',
      address: 'almeria',
      phone: 698777555,
      group: '',
    },
  ]);
}
