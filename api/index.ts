import cors from "@fastify/cors";
import { PrismaClient } from '@prisma/client';
import dotenv from "dotenv";
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import "source-map-support/register";

dotenv.config();

const prisma = new PrismaClient();
const fastify = Fastify({ logger: false });

fastify.get("/data", async (req: FastifyRequest, res: FastifyReply) => {
  return await res.status(200).send({
    techologies: [
      "Git",
      "Visual Studio Code",
      "GitHub",
      "Docker",
      "Vercel",
      "Heroku",
      "Netlify",
      "Cloudflare",
      "GitLab",
      "NetData",
      "npm",
      "yarn",
      "pnpm",
      "Simplenote",
      "Slack",
      "Tebi S3",
      "Express",
      "Prettier",
      "Nodemon",
      "ESLint",
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "Redis",
      "Vue",
      "Gatsby",
      "ReactJs",
      "NextJs",
      "Svelte",
      "SvelteKit",
      "Vite",
      "TailwindCSS",
      "Fastify",
      "Prisma",
      "Node.js",
    ],

    languages: ["TypeScript", "JavaScript", "Python", "Go*", "Rust*", "Java*"],

    socialLinks: [
      {
        name: "Discord",
        icon: "<svg width='49' height='45' viewBox='0 0 49 45' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_152_25)'><path d='M19.9895 21.0552C18.6395 21.0552 17.5737 22.2394 17.5737 23.6842C17.5737 25.1289 18.6632 26.3131 19.9895 26.3131C21.3395 26.3131 22.4053 25.1289 22.4053 23.6842C22.429 22.2394 21.3395 21.0552 19.9895 21.0552ZM28.6343 21.0552C27.2843 21.0552 26.2185 22.2394 26.2185 23.6842C26.2185 25.1289 27.3079 26.3131 28.6343 26.3131C29.9843 26.3131 31.05 25.1289 31.05 23.6842C31.05 22.2394 29.9843 21.0552 28.6343 21.0552Z' fill='white'/><path d='M40.1448 1.1842H8.408C5.73168 1.1842 3.55273 3.36315 3.55273 6.06315V38.0842C3.55273 40.7842 5.73168 42.9632 8.408 42.9632H35.2659L34.0106 38.5816L37.0422 41.4L39.908 44.0526L45.0001 48.5526V6.06315C45.0001 3.36315 42.8212 1.1842 40.1448 1.1842ZM31.0027 32.1158C31.0027 32.1158 30.1501 31.0974 29.4396 30.1974C32.5422 29.321 33.7264 27.3789 33.7264 27.3789C32.7554 28.0184 31.8317 28.4684 31.0027 28.7763C29.8185 29.2737 28.6817 29.6053 27.5685 29.7947C25.2948 30.221 23.2106 30.1026 21.4343 29.771C20.0843 29.5105 18.9238 29.1316 17.9527 28.7526C17.408 28.5395 16.8159 28.2789 16.2238 27.9474C16.1527 27.9 16.0817 27.8763 16.0106 27.8289C15.9633 27.8053 15.9396 27.7816 15.9159 27.7579C15.4896 27.521 15.2527 27.3553 15.2527 27.3553C15.2527 27.3553 16.3896 29.25 19.3975 30.15C18.6869 31.05 17.8106 32.1158 17.8106 32.1158C12.5764 31.95 10.5869 28.5158 10.5869 28.5158C10.5869 20.8895 13.9975 14.7079 13.9975 14.7079C17.408 12.15 20.6527 12.221 20.6527 12.221L20.8896 12.5053C16.6264 13.7368 14.6606 15.6079 14.6606 15.6079C14.6606 15.6079 15.1817 15.3237 16.058 14.921C18.5922 13.8079 20.6054 13.5 21.4343 13.4289C21.5764 13.4053 21.6948 13.3816 21.8369 13.3816C23.2817 13.1921 24.9159 13.1447 26.6212 13.3342C28.8712 13.5947 31.2869 14.2579 33.7501 15.6079C33.7501 15.6079 31.8791 13.8316 27.8527 12.6L28.1843 12.221C28.1843 12.221 31.4291 12.15 34.8396 14.7079C34.8396 14.7079 38.2501 20.8895 38.2501 28.5158C38.2501 28.5158 36.2369 31.95 31.0027 32.1158Z' fill='white'/></g><defs><clipPath id='clip0_152_25'><rect width='48.5526' height='45' fill='white'/></clipPath></defs></svg>",
        url: "https://discordapp.com/users/616254619584299012",
      },
      {
        name: "Email",
        icon: "<svg width='52' height='45' viewBox='0 0 52 45' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.57136 8.57141H42.8571C45.2142 8.57141 47.1428 10.5 47.1428 12.8571V38.5714C47.1428 40.9286 45.2142 42.8571 42.8571 42.8571H8.57136C6.21422 42.8571 4.28564 40.9286 4.28564 38.5714V12.8571C4.28564 10.5 6.21422 8.57141 8.57136 8.57141Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M47.1428 12.8571L25.7142 27.8571L4.28564 12.8571' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        url: "mailto:ilmail@mail.com",
      },
      {
        name: "GitHub",
        icon: "<svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.875 35.625C7.5 38.4375 7.5 30.9375 3.75 30M30 41.25V33.9938C30.0703 33.0997 29.9495 32.2009 29.6457 31.3571C29.3418 30.5133 28.8617 29.7439 28.2375 29.1C34.125 28.4438 40.3125 26.2125 40.3125 15.975C40.312 13.3572 39.305 10.8398 37.5 8.94375C38.3547 6.65345 38.2943 4.12191 37.3312 1.87501C37.3312 1.87501 35.1188 1.21876 30 4.65001C25.7025 3.4853 21.1725 3.4853 16.875 4.65001C11.7562 1.21876 9.54375 1.87501 9.54375 1.87501C8.58071 4.12191 8.52027 6.65345 9.375 8.94375C7.55649 10.8538 6.54848 13.394 6.5625 16.0313C6.5625 26.1938 12.75 28.425 18.6375 29.1563C18.0206 29.7937 17.5449 30.5539 17.2412 31.3874C16.9375 32.2208 16.8128 33.1089 16.875 33.9938V41.25' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        url: "https://github.com/riqalter",
      },
      {
        name: "LinkedIn",
        icon: "<svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M30 15C32.9837 15 35.8452 16.1853 37.955 18.295C40.0647 20.4048 41.25 23.2663 41.25 26.25V39.375H33.75V26.25C33.75 25.2554 33.3549 24.3016 32.6516 23.5984C31.9484 22.8951 30.9946 22.5 30 22.5C29.0054 22.5 28.0516 22.8951 27.3484 23.5984C26.6451 24.3016 26.25 25.2554 26.25 26.25V39.375H18.75V26.25C18.75 23.2663 19.9353 20.4048 22.045 18.295C24.1548 16.1853 27.0163 15 30 15V15Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M11.25 16.875H3.75V39.375H11.25V16.875Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M7.5 11.25C9.57107 11.25 11.25 9.57107 11.25 7.5C11.25 5.42893 9.57107 3.75 7.5 3.75C5.42893 3.75 3.75 5.42893 3.75 7.5C3.75 9.57107 5.42893 11.25 7.5 11.25Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        url: "https://www.linkedin.com/in/mikailthoriq/",
      },
      {
        name: "Telegram",
        icon: "<svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M39.7462 4.56187C39.0847 4.54353 38.4281 4.68165 37.83 4.965L21.6881 11.2087C17.8106 12.7087 13.9387 14.205 10.9556 15.3525C9.17755 16.0404 7.39692 16.7217 5.61373 17.3962C4.82623 17.6719 3.75748 18.0187 2.85186 19.0856C1.48686 20.9006 3.21373 22.4569 4.57498 23.3719C7.59373 24.3394 10.7156 25.2637 13.3012 26.1319C14.2556 29.4937 15.1706 32.8669 16.0762 36.2344C16.3762 36.9094 17.025 37.1606 17.6962 37.1681L17.6925 37.2019C17.6925 37.2019 18.2194 37.2544 18.7331 37.1306C19.3899 36.9634 19.9925 36.6296 20.4825 36.1612C21.1294 35.5537 22.8825 33.8287 23.8781 32.8537L31.3762 38.3888L31.4362 38.4225C31.4362 38.4225 32.265 39.0056 33.48 39.0881C34.0875 39.1294 34.8862 39.0131 35.5725 38.5106C36.2662 38.0044 36.7219 37.1944 36.9375 36.2681C37.5787 33.4706 41.8312 13.2337 42.5569 9.88312L42.5381 9.96187C43.0444 8.07562 42.8569 6.34687 41.685 5.32312C41.1461 4.85278 40.4612 4.58318 39.7462 4.56V4.56187Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        url: "https://ilmail666.t.me/",
      },
    ],

    projects: [
      {
        name: "Animeriq V1",
        description:
          "Anime website for people who love anime. I built this website with ReactJS and Axios for search webscraper",
        stack: ["yarn", "Git", "Visual Studio Code", "JavaScript", "react", "material-ui"],
        emoji: "👀",
        url: "https://anime.mikailthoriq.eu.org/",
      },
      {
        name: "Anime V2 Rev3",
        description: "same as before but more refined",
        stack: [
          "yarn",
          "Visual Studio Code",
          "Git",
          "JavaScript",
          "fontawesome",
          "ant-design",
          "axios",
          "vime",
          "react",
          "sass",
          "styled-components",
          "uuid",
          "framer-motion",
        ],
        emoji: "🍾",
        url: "https://animev2.mikailthoriq.eu.org/",
      },
      {
        name: "image-condom",
        description:
          "A simple image compression and resizing tool using the Sharp JavaScript library to perform operations such as compression, resizing, and on-the-fly processing of images.",
        stack: ["yarn", "Git", "Visual Studio Code", "Sharp", "express", "request", "basic-auth", "JavaScript"],
        emoji: "🖼️",
      },
      {
        name: "Weatheriq",
        description: "A simple weather app using OpenWeatherMap API.",
        stack: ["pnpm", "Git", "Visual Studio Code", "babel", "sass", "bootstrap", "npm [In the past]"],
        emoji: "⛅",
        url: "https://weather.mikailthoriq.eu.org",
        github: "https://github.com/thq642/weather-webapp",
      },
      {
        name: "nexgenmyidV4",
        description: "Source code of my personal website.",
        stack: [
          "Git",
          "Visual Studio Code",
          "react",
          "gatsby",
          "graphql",
          "eslint",
          "github action",
          "TypeScript",
          "Vite",
          "styled components",
        ],
        emoji: "⭐",
        url: "https://mikailthoriq.my.id",
        github: "https://github.com/thq642/nextgenmyidV4-Stargaze",
      },
    ],
  });
});

fastify.post(
  "/counter",
  async (req: FastifyRequest & { body: { numRange: number; path: string } }, res: FastifyReply) => {
    const {
      body: { numRange, path },
    } = req;

    if (!numRange || numRange < 1 || !path || isNaN(numRange)) {
      return res.status(403).send({ error: "Incorrect data." });
    }

    if (numRange !== 1) {
      let findRequest = await prisma.statistics.findFirst({
        where: { numRange, path },
        orderBy: { requestedAt: "desc" },
      });

      if (!findRequest) {
        findRequest = await prisma.statistics.create({ data: { numRange, path } });
      }

      const currentTimeInMS = new Date().getTime();
      const timeFromDb = findRequest.requestedAt.getTime() + 1000 * 60 * 60;

      if (timeFromDb < currentTimeInMS && findRequest.path === path) {
        await prisma.statistics.create({ data: { numRange, path } });
      }
    } else {
      await prisma.statistics.create({ data: { numRange, path } });
    }

    const views = await prisma.statistics.count({ where: { path } });

    return await res.status(200).send({ views });
  },
);

async function boot() {
  await fastify.register(cors);
  await fastify.listen({ port: parseInt(process.env.PORT), host: "0.0.0.0" });
}

boot();
