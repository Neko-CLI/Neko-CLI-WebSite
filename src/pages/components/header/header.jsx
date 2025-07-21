import { useEffect, useState } from "react";
import { Button, Link, Tab, Tabs, Avatar, Card } from "@nextui-org/react";
import { Image } from "@heroui/react";
import Code from "../code";
import Feature from "./feature";
import Sponsor from "../sponsor";
import Icon from "../icon";
import { SiReplit } from "react-icons/si";
import { FaCat, FaLightbulb } from 'react-icons/fa'; 
import chartIcon from "../../../static/animated/chartIcon.json";
import categoryIcon from "../../../static/animated/categoryIcon.json";
import compareIcon from "../../../static/animated/compareIcon.json";
import fileIcon from "../../../static/animated/fileIcon.json";
import PieChart from "../pieChart";
import { Marquee } from "../marquee";
import { HeartIcon } from "../../../static/icons/heart";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [downloads, setDownloads] = useState({
    weekly: 0,
    monthly: 0,
    yearly: 0,
  });
  const [pieData, setPieData] = useState({
    labels: ["Monthly", "Yearly", "Weekly"],
    datasets: [
      {
        label: "Downloads",
        data: [0, 0, 0],
        backgroundColor: ["#2473f5", "#255aff", "#253cff"],
        hoverOffset: 4,
      },
    ],
  });
  const [sponsors, setSponsors] = useState([]);

  const [os, setOs] = useState("unknown");

  const [isMobile, setIsMobile] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    const userAgent = window.navigator.userAgent;
    if (userAgent.includes("Win")) {
      setOs("Windows");
    } else if (userAgent.includes("Mac")) {
      setOs("Mac");
    } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
      setOs("iOS");
    } else if (userAgent.includes("Android")) {
      setOs("Android");
    } else if (userAgent.includes("Linux")) {
      setOs("Linux");
    } else {
      setOs("unknown");
    }

    const fetchDownloads = async () => {
      try {
        const weekly = await fetch(
          "https://api.npmjs.org/downloads/point/last-week/neko-cli"
        ).then((res) => res.json());
        const monthly = await fetch(
          "https://api.npmjs.org/downloads/point/last-month/neko-cli"
        ).then((res) => res.json());
        const yearly = await fetch(
          "https://api.npmjs.org/downloads/point/last-year/neko-cli"
        ).then((res) => res.json());

        setDownloads({
          weekly: weekly.downloads,
          monthly: monthly.downloads,
          yearly: yearly.downloads,
        });

        setPieData({
          labels: ["Monthly", "Yearly", "Weekly"],
          datasets: [
            {
              label: "Downloads",
              data: [monthly.downloads, yearly.downloads, weekly.downloads],
              backgroundColor: ["#2473f5", "#255aff", "#253cff"],
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching downloads data:", error);
      }
    };

    const fetchSponsors = async () => {
      try {
        const sponsorsData = await fetch(
          "https://raw.githubusercontent.com/Neko-CLI/SponsorsJson/refs/heads/main/sponsors.json"
        ).then((res) => res.json());
        setSponsors(sponsorsData);
      } catch (error) {
        console.error("Error fetching sponsors data:", error);
      }
    };

    fetchDownloads();
    fetchSponsors();

    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek === 3 || dayOfWeek === 6) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const formatNumber = (num) => {
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "k";
    return num.toString();
  };

  let buttonText;
  let buttonHref;
  let buttonColor = "primary";
  let buttonVariant = "solid";
  let showFileIcon = true;

  switch (os) {
    case "Windows":
      buttonText = "Download Neko-CLI-Installer.exe";
      buttonHref =
        "./docs/guide/windows-installation";
      break;
    case "Mac":
      buttonText = "Install on IOS";
      buttonHref = "./docs/guide/ios-installation";
      buttonColor = "primary";
      buttonVariant = "ghost";
      showFileIcon = false;
      break;
    case "Linux":
      buttonText = "Install on Linux";
      buttonHref = "./docs/linux-installation";
      buttonColor = "danger";
      buttonVariant = "ghost";
      showFileIcon = false;
      break;
    case "Android":
      buttonText = "Install on Android";
      buttonHref = "./docs/guide/termux-installation";
      buttonColor = "primary";
      buttonVariant = "ghost";
      showFileIcon = false;
      break;
    case "iOS":
      buttonText = "Install on IOS";
      buttonHref = "./docs/guide/ios-installation";
      buttonColor = "primary";
      buttonVariant = "ghost";
      showFileIcon = false;
      break;
    default:
      buttonText = "See download options";
      buttonHref = "https://github.com/Neko-CLI/Neko-CLI/releases";
      buttonVariant = "ghost";
      showFileIcon = false;
      break;
  }

  return (
    <header className="w-full flex justify-between flex-col items-center">
      <div className="flex flex-row w-fit gap-24 mt-10 flex-wrap justify-center px-5">
        <div className="flex flex-col gap-8 items-center mt-10 w-[310px] order-2 2xl:order-1">
          <h1 className="text-2xl font-bold">Downloads</h1>
          <div className="flex flex-row gap-8 items-center">
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Weekly:</span>{" "}
                <span className="text-primary font-bold">
                  {formatNumber(downloads.weekly)}
                </span>
              </p>
              <p>
                <span className="font-bold">Monthly:</span>{" "}
                <span className="text-primary font-bold">
                  {formatNumber(downloads.monthly)}
                </span>
              </p>
              <p>
                <span className="font-bold">Yearly:</span>{" "}
                <span className="text-primary font-bold">
                  {formatNumber(downloads.yearly)}
                </span>
              </p>
            </div>
            <div>
              <PieChart data={pieData} />
            </div>
          </div>
        </div>
        {!isMobile && showBanner && (
          <div
            style={{
              position: "fixed",
              top: "80px",
              left: "10px",
              zIndex: 9999,
              width: "160px",
              height: "600px",
              overflow: "hidden",
            }}
          >
            <Image
              alt="NordVPN Banner"
              src="https://i.imgur.com/ZJwdz5M.png"
              className="cursor-pointer"
              style={{
                width: "160px",
                height: "600px",
                display: "block",
              }}
              onClick={() =>
                window.open(
                  "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=124821&url_id=902",
                  "_blank"
                )
              }
            />
          </div>
        )}
        <div className="flex flex-col gap-8 items-center -order-1 2xl:order-2 2xl:w-auto w-full text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold m-0 text-primary mb-2">
              Welcome to Neko-CLI PackageManager
            </h1>
            <p className="text-base text-gray-400">
              The ultimate CLI for modern developers, easy to install and use.
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Button
              as={Link}
              className="font-bold"
              color="primary"
              href="./docs"
              size="lg"
              variant="ghost"
              radius="full"
            >
              Learn more
            </Button>

            <Button
              as={Link}
              className="font-bold"
              color={buttonColor}
              href={buttonHref}
              size="lg"
              variant={buttonVariant}
              radius="full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {buttonText}
              {showFileIcon && (
                <Icon
                  name="fileIcon"
                  size="md"
                  handleAnimate={isHovered}
                  Icon={fileIcon}
                  color="#fff"
                />
              )}
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold m-0 text-primary-300 my-5">
        Neko CLI
        <br />
        <span className="flex items-center justify-center text-lg font-medium ">
          <FaLightbulb className="mr-2 text-yellow-500" />
          The smarter way to manage Node.js.
          <FaCat className="ml-2 text-gray-500" />
        </span>
      </h1>
            <Button
              as="a"
              className="font-bold mt-4"
              color="primary"
              href="https://replit.com/@Neko-CLI/Neko-CLI-Demo"
              size="lg"
              variant="ghost"
              radius="full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiReplit  className="mr-2" />
              Try the Demo on Replit
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 w-[310px] order-3 2xl:order-3">
          <Tabs aria-label="Options" variant="underlined">
            <Tab key="npm" title="npm" className="text-center">
              <h1 className="text-xl font-bold m-0 text-primary-300 mb-2">
                Neko-CLI Installation with npm
              </h1>
              <p className="text-base text-gray-400 mb-1">
                Run in your terminal:
              </p>
              <Code>npm i -g neko-cli</Code>
              <p className="text-base text-gray-400 mb-1">To verify run:</p>
              <Code>meow help</Code>
            </Tab>
            <Tab key="yarn" title="yarn" className="text-center">
              <h1 className="text-xl font-bold m-0 text-primary-300 mb-2">
                Neko-CLI Installation with yarn
              </h1>
              <p className="text-base text-gray-400 mb-1">
                Run in your terminal:
              </p>
              <Code>yarn global add neko-cli</Code>
              <p className="text-base text-gray-400 mb-1">To verify run:</p>
              <Code>meow help</Code>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-row w-full gap-10 justify-center mt-20 flex-wrap px-5 2xl:mt-10">
        <Feature
          icon={chartIcon}
          title="Unmatched Performance"
          description="Neko-CLI delivers exceptional performance, executing even the most resource-intensive tasks quickly and reliably. Optimized for speed and efficiency, it handles large datasets and complex operations with minimal latency, ensuring fast results without compromising stability."
        />

        <Feature
          icon={categoryIcon}
          title="Seamless Package Manager Integration"
          description="Neko-CLI integrates smoothly with package managers like npm and yarn, simplifying dependency management. Whether installing, updating, or uninstalling packages, Neko-CLI offers a flexible interface to streamline your workflow."
        />

        <Feature
          icon={compareIcon}
          title="Prioritizing Security"
          description="Security is a top priority in Neko-CLI. It uses best security practices, including encrypted data transmission and secure package installations, ensuring that your tasks are always safe from threats and vulnerabilities."
        />
      </div>

      <div className="flex flex-col justify-center mt-10 items-center text-center w-full flex-wrap">
        <h1 className="text-2xl font-bold m-0 text-primary mb-2">
          Our Valued Sponsors
        </h1>
        <div className="flex flex-row max-w-full gap-10 justify-center items-center mx-auto md:mx-20 xl:mx-44 flex-wrap w-full md:w-[calc(100%-5rem*2)] xl:w-[calc(100%-11rem*2)]">
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:30s] [--gap:2.5rem]"
          >
            {sponsors.map((sponsor, index) => (
              <Sponsor
                key={index}
                iconURL={sponsor.logo}
                name={sponsor.name}
                URL={sponsor.link}
                color={`#${sponsor.color}`}
                width={sponsor.iconSize}
                iconOnly={sponsor.iconOnly}
              />
            ))}
            <Button
              color="primary"
              variant="flat"
              className="font-bold text-primary"
              as={Link}
              href="mailto:nekoclisupp@gmail.com?cc=thomasgarau2002@gmail.com&subject=Proposal%20Sponsor%20Neko-CLI%20x%20%5Bname%20here%5D&body=Dear...%20%5Btext%20here%5D"
            >
              Become a sponsor
              <HeartIcon />
            </Button>
          </Marquee>
        </div>
      </div>
    </header>
  );
}
