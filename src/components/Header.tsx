import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { EmailIcon } from "./icons/EmailIcon";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="col-start-2 flex items-center px-6 py-4 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100">
      <div className="flex-1 text-start md:text-center font-bold">
        <p>
          Created by{" "}
          <a
            href="https://faberospina.netlify.app/"
            target="_blank"
            className="hover:underline"
          >
            @FaberOs
          </a>
        </p>
      </div>
      <div className="flex gap-2 lg:gap-4 ml-2 lg:ml-4">
        <a
          href="mailto:faberanosco@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-500"
        >
          <EmailIcon />
        </a>
        <a
          href="https://github.com/FaberOs"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-500"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/faberospinacortes/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-500"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="ml-4 md:hidden">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
