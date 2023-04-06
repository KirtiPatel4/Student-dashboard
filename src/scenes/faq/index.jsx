import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Ask your dobuts" subtitle="Post your doubts here and our team will reply back as soon as possible" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ask your qurey"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Name}
                name="Name"
                sx={{ gridColumn: "span 4" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="center" mt="30px">
              <Button type="submit" color="secondary" variant="contained">
                POST
              </Button>
            </Box>
          </form>
        )}
      </Formik>
   

    <Box  display="block" mt="20px">
      <Accordion defaultExpanded>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography color={colors.greenAccent[500]} variant="h5">
               An Important Question
             </Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
               malesuada lacus ex, sit amet blandit leo lobortis eget.
             </Typography>
           </AccordionDetails>
         </Accordion>
     </Box>
     <Box  display="block" mt="20px">
      <Accordion defaultExpanded>
           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
             <Typography color={colors.greenAccent[500]} variant="h5">
               An Important Question
             </Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
               malesuada lacus ex, sit amet blandit leo lobortis eget.
             </Typography>
           </AccordionDetails>
         </Accordion>
     </Box>
     </Box>
  );
};



const initialValues = {
  Query: "",
};



export default FAQ;


