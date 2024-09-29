import { NextFunction, Request, Response } from "express";

const notFound = async (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "দুঃখিত, আপনার অনুরোধ করা API খুঁজে পাওয়া যায়নি।",
    error: "",
  });
};

export default notFound;
