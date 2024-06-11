import { RequestHandler } from "express";
import db from "../utils/prisma";

const allBlog: RequestHandler = async (req, res, next) => {
  try {
    const blogs = await db.blog
      .paginate({
        select: {
          id: true,
          title: true,
          cover: true,
          cratedAt: true,
          viewers: true,
        },
      })
      .withPages({ limit: 10, page: 1 });
    return res.json({ blogs: blogs[0], meta: blogs[1] });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const findBlogById: RequestHandler = async (req, res, next) => {
  try {
    const blog = await db.blog.findFirst({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!blog) return res.status(404).json({ message: "Halaman yang anda cari tidak di temukan" });

    return res.json({ blog: blog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { allBlog, findBlogById };
