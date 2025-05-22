import { Router, Request, Response } from "express";
import { mockUserData } from "../mock/mock-data";

const router = Router();

// ---------------------------------------------------------------------------------

type TParamsId = {
  id: string;
};

// ---------------------------------------------------------------------------------

router.get(`/:id`, (req: Request<TParamsId>, res: Response) => {
  const getId = req.params.id;

  const findData = mockUserData.find((item) => item.id === getId);

  if (!findData) {
    res.status(400).json({
      message: "Data not found!",
    });
    return;
  }

  res.status(200).json({
    data: findData,
    status: true,
  });
});

// ---------------------------------------------------------------------------------
type TBody = {
  name: string;
  email: string;
};

router.post(`/`, (req: Request<{}, {}, TBody>, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({
      message: `${!name && "Name is required!"} ${
        !email && "Email is required!"
      }`,
    });

    return;
  }

  const newData: (typeof mockUserData)[0] = {
    id: `a${mockUserData.length + 1}`,
    name,
    email,
  };

  const addData = [...mockUserData, newData];

  res.status(200).json({
    data: addData,
    message: "Add data is success!",
    status: true,
  });
});

// ---------------------------------------------------------------------------------

router.delete("/:id", (req: Request<TParamsId>, res: Response) => {
  const getId = req.params.id;

  const findData = mockUserData.some((item) => item.id === getId);

  if (!findData) {
    res.status(400).json({
      message: "Data not found!",
    });
    return;
  }

  const delData = mockUserData.filter((item) => item.id !== getId);

  res.status(200).json({
    data: delData,
    message: "Delete data success!",
    status: true,
  });
});

module.exports = router;
