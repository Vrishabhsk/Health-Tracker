import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1b1717",
    paddingTop: "16px",
  },
  footerSections: {
    margin: "0 16px",
  },
  subFooter: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "8px 16px",
    marginTop: "8px",
    color: "#fff",
    fontSize: "14px",
    textAlign: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: "14px",
    lineHeight: 1.5,
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    fontFamily: "poppins",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <a className="socials" href="https://www.instagram.com/mohfwindia/?hl=en"><InstagramIcon fontSize="large" className="spacing" /></a>
            <a className="socials" href="https://www.facebook.com/MoHFWIndia/"><FacebookIcon fontSize="large" className="spacing" /></a>
            <a className="socials" href="https://www.youtube.com/channel/UCsyPEi8BS07G8ZPXmpzIZrg"><LinkedInIcon fontSize="large" className="spacing" /></a>
            <a className="socials" href="https://www.linkedin.com/company/ministry-of-health-and-family-welfare-government-of-india/?originalSubdomain=in"><YouTubeIcon fontSize="large" className="spacing" /></a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            className={[
              classes.footerText,
              classes.footerSections,
              classes.vert,
            ]}
          >
            <b>Central Helpline Number for Covid-19: </b>
            <a id="mobile" href="tel:+91-11-23978046">
              +91-11-23978046
            </a>
            <br />
            <b>Helpline Email ID:</b>
            <a id="Mail" href="mailto:ncov2019@gov.in">
              ncov2019@gov.in
            </a>
             <br />
            <b>Toll Free:</b> 1075 <br />
            <b>IVRS:</b> 1921 <br />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography className={[classes.footerText, classes.footerSections]}>
            <b>Ministry of Health & Family Welfare:</b>
            <br />
            Room No. 348, ‘A’ Wing, <br />
            Nirman Bhavan,
            <br />
            New Delhi-110011
          </Typography>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <span>© 2021 Enigma. All Rights Reserved.</span>
        </Grid>
      </Grid>
    </div>
  );
}
