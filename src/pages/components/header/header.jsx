import { useEffect, useState } from "react";
import { Button, Link, Tab, Tabs, Avatar, Card } from "@nextui-org/react";
import { Image } from "@heroui/react";
import Code from "../code";
import Feature from "./feature";
import Sponsor from "../sponsor";
import Icon from "../icon";

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
        "https://github.com/UnStackss/Neko-CLI/releases/download/0.0.1/Neko-CLI-Installer.exe";
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
              The smarter way to manage Node.js.
            </h1>
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
              <Code>neko help</Code>
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
              <Code>neko help</Code>
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
        <h1 className="text-xl font-bold m-0 text-primary-300 my-5">
          Building on Strength: Main Hosting Supported by Our Partners.
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              width: "400px",
              height: "200px",
              borderRadius: "16px",
              backgroundColor: "#212F4D",
              backdropFilter: "blur(5px)",
              overflow: "hidden",
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              gap: "10px",
            }}
          >
            <style>
              {`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.7;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.7;
          }
        }
        .pulsating-circle {
          animation: pulse 1.5s infinite ease-in-out;
        }
      `}
            </style>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "5px",
              }}
            >
              <Image
                src="https://i.imgur.com/koIBBEZ.png"
                alt="DeluxHost Logo"
                width={150}
                height={44}
                style={{ flexShrink: 0 }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  minWidth: "60px",
                  textAlign: "center",
                  flexGrow: 1,
                }}
              >
                <span
                  className="pulsating-circle"
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#66bb6a",
                    marginBottom: "5px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: "#66bb6a",
                  }}
                >
                  VPS-2
                  <br />
                  Available
                </span>
              </div>

              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#66bb6a",
                  flexShrink: 0,
                }}
              >
                3.99€
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  marginRight: "20px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "6px 15px",
                    fontSize: "0.85rem",
                    lineHeight: "1.2",
                  }}
                >
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/color/48/electronics.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>2 Core</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-ram-computer-science-flaticons-lineal-color-flat-icons.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>4GB RAM</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/offices/30/storage.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>50GB Storage</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-bandwidth-computer-science-flaticons-flat-flat-icons.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>2Gb/s Bwth</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://cdn.countryflags.com/thumbs/netherlands/flag-400.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                        objectFit: "contain",
                      }}
                    />
                    <span>Amsterdam</span>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  flexShrink: 0,
                }}
              >
                <a
                  href="https://billing.deluxhost.net/aff.php?aff=247&pid=163"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    variant="ghost"
                    style={{
                      width: "80px",
                      height: "50px",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "0",
                      fontSize: "0.8rem",
                      lineHeight: "1.2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    See Plans
                  </Button>
                </a>
              </div>
            </div>
          </Card>
          <Card
            style={{
              width: "400px",
              height: "200px",
              borderRadius: "16px",
              backgroundColor: "#212F4D",
              backdropFilter: "blur(5px)",
              overflow: "hidden",
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              gap: "10px",
            }}
          >
            <style>
              {`
      @keyframes pulse {
        0% {
          transform: scale(0.8);
          opacity: 0.7;
        }
        50% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(0.8);
          opacity: 0.7;
        }
      }
      .pulsating-circle {
        animation: pulse 1.5s infinite ease-in-out;
      }
    `}
            </style>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "5px",
              }}
            >
              <Image
                src="https://i.imgur.com/koIBBEZ.png"
                alt="DeluxHost Logo"
                width={150}
                height={44}
                style={{ flexShrink: 0 }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  minWidth: "60px",
                  textAlign: "center",
                  flexGrow: 1,
                }}
              >
                <span
                  className="pulsating-circle"
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#66bb6a",
                    marginBottom: "5px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: "#66bb6a",
                  }}
                >
                  Intel Xeon v6
                  <br />
                  Available
                </span>
              </div>

              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#66bb6a",
                  flexShrink: 0,
                }}
              >
                49.99€
                <br />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    color: "#66bb6a",
                    flexShrink: 0,
                  }}
                >
                  + 8.00€ onetime
                </span>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  marginRight: "20px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "6px 15px",
                    fontSize: "0.85rem",
                    lineHeight: "1.2",
                  }}
                >
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/color/48/electronics.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>
                      E3-1270 v6
                      <br />
                      (4C/8T)
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-ram-computer-science-flaticons-lineal-color-flat-icons.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>
                      32GB RAM
                      <br />
                      (max 64GB)
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/offices/30/storage.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                        objectFit: "contain",
                      }}
                    />
                    <span>
                      256GB NVMe
                      <br />
                      (max 2x 2TB)
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-bandwidth-computer-science-flaticons-flat-flat-icons.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                        objectFit: "contain",
                      }}
                    />
                    <span>
                      1Gb/s Bwth
                      <br />
                      (max 10Gb/s)
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://cdn.countryflags.com/thumbs/germany/flag-400.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                        objectFit: "contain",
                      }}
                    />
                    <span>Frankfurt</span>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  flexShrink: 0,
                }}
              >
                <a
                  href="https://billing.deluxhost.net/aff.php?aff=247&pid=137"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    variant="ghost"
                    style={{
                      width: "80px",
                      height: "50px",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "0",
                      fontSize: "0.8rem",
                      lineHeight: "1.2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    See Plans
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          <Card
            style={{
              width: "400px",
              height: "200px",
              borderRadius: "16px",
              backgroundColor: "#212F4D",
              backdropFilter: "blur(5px)",
              overflow: "hidden",
              color: "white",
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              gap: "10px",
            }}
          >
            <style>
              {`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.7;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.7;
          }
        }
        .pulsating-circle {
          animation: pulse 1.5s infinite ease-in-out;
        }
      `}
            </style>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "5px",
              }}
            >
              <Image
                src="https://i.imgur.com/koIBBEZ.png"
                alt="DeluxHost Logo"
                width={150}
                height={44}
                style={{ flexShrink: 0 }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  minWidth: "60px",
                  textAlign: "center",
                  flexGrow: 1,
                }}
              >
                <span
                  className="pulsating-circle"
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#66bb6a",
                    marginBottom: "5px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: "#66bb6a",
                  }}
                >
                  WEB-1
                  <br />
                  Available
                </span>
              </div>

              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#66bb6a",
                  flexShrink: 0,
                }}
              >
                1.99€
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexGrow: 1,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  marginRight: "20px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "6px 15px",
                    fontSize: "0.85rem",
                    lineHeight: "1.2",
                  }}
                >
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/offices/30/storage.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>10GB NVMe</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/ios/50/domain--v1.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>1 Domain</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <span>♾️ Subdomains</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/glassmorphism/48/database.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>5 MySQL DBs</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/fluency/48/mail.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>5 Emails</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/pulsar-gradient/48/tls.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>Free SSL</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-bandwidth-computer-science-flaticons-flat-flat-icons.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>10Gb/s Bwth</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="https://cdn.countryflags.com/thumbs/netherlands/flag-400.png"
                      radius="sm"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                        objectFit: "contain",
                      }}
                    />
                    <span>Amsterdam</span>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  flexShrink: 0,
                }}
              >
                <a
                  href="https://billing.deluxhost.net/aff.php?aff=247&pid=214"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    variant="ghost"
                    style={{
                      width: "80px",
                      height: "50px",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "0",
                      fontSize: "0.8rem",
                      lineHeight: "1.2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    See Plans
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
        <h1 className="text-xl font-bold m-0 text-primary-300 my-5">
          Our sponsors
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
