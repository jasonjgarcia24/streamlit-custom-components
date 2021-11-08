import { styled } from "@material-ui/core"
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Box from '@mui/material/Box';
import CSS from 'csstype';

import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"

import React, { ReactNode } from "react"


class CryptoAccountStack extends StreamlitComponentBase {
  public render = (): ReactNode => {
    const header_str       = this.props.args["header_str"]
    const address_str_val  = this.props.args["address_str_val"]
    const address_str_hdr  = this.props.args["address_str_hdr"]
    const balance_str_val  = this.props.args["balance_str_val"]
    const balance_str_unit = this.props.args["balance_str_unit"]
    const balance_str_hdr  = this.props.args["balance_str_hdr"]
    const copy_str         = this.props.args["copy_str"]
    const href             = this.props.args["href"]

    const color       = this.props.args["color"]
    const padding     = this.props.args["padding"]
    const margin      = this.props.args["margin"]
    const background  = this.props.args["background"]
    const font_size   = this.props.args["font_size"]
    const font_weight = this.props.args["font_weight"]
    const width       = this.props.args["width"]
    const text_align  = this.props.args["text_align"]
    
    const StyledStack = styled(Stack)({
      fontSize: font_size,
      fontWeight: font_weight,
      color: color,
      background: background,
      margin: "0",
      border: "1px solid lightblue",
      borderRadius: "15px",
    });

    const h2Styles: CSS.Properties = {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "0",
      padding: "10px 0 5px 0",
    }

    const pStyles: CSS.Properties = {
      margin: "0",
      padding: "0"
    }

    function handleClick() {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = copy_str;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }

    return (
      <StyledStack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: width,
            p: padding,
            m: margin,
            textAlign: text_align,
          }}
        >
          <h2 style={h2Styles}>{header_str}</h2>
          <p style={pStyles}>
            <b>{address_str_hdr}</b>{"\xa0"}
            <Link href={href} target="_blank" underline="hover">
              {address_str_val}
            </Link>            
            <IconButton aria-label="copy" size="small" onClick={handleClick}>
              <ContentCopyIcon />
            </IconButton>
          </p>
          <p><b>{balance_str_hdr}</b> {balance_str_val} ({balance_str_unit})</p>
        </Box>
      </StyledStack>
    );
  }
}

export default withStreamlitConnection(CryptoAccountStack)

