import * as React from "react";
import * as singleSpa from "single-spa";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function LabTabs() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (+newValue) {
      case 0:
        singleSpa.navigateToUrl("/");
        break;

      case 1:
        singleSpa.navigateToUrl("/app1");
        break;

      case 2:
        singleSpa.navigateToUrl("/app2");
        break;
      case 3:
        singleSpa.navigateToUrl("/app3");
        break;

      case 4:
        singleSpa.navigateToUrl("/app4");
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="0" />
            <Tab label="App1" value="1" />
            <Tab label="App2" value="2" />
            <Tab label="App3" value="3" />
            <Tab label="App4" value="4" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
