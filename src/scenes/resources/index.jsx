import { Box , Button, IconButton, Typography, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header";
//import { useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
//import EmailIcon from "@mui/icons-material/Email";
import ComputerIcon from "@mui/icons-material/ComputerOutlined";
import BookIcon from "@mui/icons-material/BookRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/NetworkCell";

import { Container } from  'react-bootstrap';

const Resources = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  

  return (
    <Box m="20px">
      <Header
        title="Study Material"
        subtitle="The content given below will help studnets to prepare for the placement session."
      />

            {/* GRID & CHARTS */}
            <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        marginBottom={5}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          
        >
          <Box>
          <a href="https://drive.google.com/file/d/10_qOh0XFb-9ukEOFapk8yOJnbAtUUUci/preview" target="_blank" >
          <BookIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px", marginRight: "10px" }}
              /> <span style={{fontSize:'15px', color:'white', textDecoration:'none'}}>TCS Paper links</span></a>
            
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          
        >
          <Box>
          <a href="https://drive.google.com/file/d/10_qOh0XFb-9ukEOFapk8yOJnbAtUUUci/preview" target="_blank" >
          <ComputerIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px", marginRight: "10px" }}
              /> <span style={{fontSize:'15px', color:'white', textDecoration:'none'}}>Must do coding questions</span></a>
            
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          
        >
          <Box>
          <a href="https://drive.google.com/file/d/10_qOh0XFb-9ukEOFapk8yOJnbAtUUUci/preview" target="_blank" >
          <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px", marginRight: "10px" }}
              /> <span style={{fontSize:'15px', color:'white', textDecoration:'none'}}>Important</span></a>
            
          </Box>
        </Box>

        
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          
        >
          <Box>
          <a href="https://drive.google.com/file/d/10_qOh0XFb-9ukEOFapk8yOJnbAtUUUci/preview" target="_blank" >
          <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px", marginRight: "10px" }}
              /> <span style={{fontSize:'15px', color:'white', textDecoration:'none'}}>SQL & OS </span></a>
            
          </Box>
        </Box>
      </Box>

  <Container marginBottom={6}>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/Tt08KmFfIYQ" frameborder="0"></iframe>
      </div>
    </Container>
 

    <Box marginTop={6}  >
      <Box marginBottom={3}>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Sample appitude question papers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion></Box>

      
      <Box marginBottom={3}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Tips to clear interviews
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box marginBottom={3}>
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to start coding
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box marginBottom={20}>
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Top 10 HR questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      </Box>
    </Box>
  );
};

export default Resources;
