import { Prisma } from '@prisma/client';

export const handleResponse = (res, data, queryType) => {
  switch (queryType) {
    case 'GET':
      if (!data) {
        return res.sendStatus(404);
      }
      return res.status(200).send(data);
    case 'POST':
      return res.status(201).send(data);
    case 'DELETE':
      return res.sendStatus(204);
    default:
      return res.status(200).send(data);
  }
};

export const handleError = (res, err) => {
  console.log(err);
  if (err.type === 'time-out') {
    return res.status(504).send({ error: err });
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2025') {
      return res.sendStatus(404);
    }
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(500).send({ error: 'Incorrect field type or missing field' });
  } else {
    return res.status(500).send({ error: err });
  }
};
