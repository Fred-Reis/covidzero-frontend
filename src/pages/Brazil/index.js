import React, { useState } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import * as Styled from "./styles.js";

import { CardStats } from "~/components";
import { Header } from "~/components";
import { MapHome } from "~/components";

const Brazil = () => {
  const [t] = useTranslation();
  const [content, setContent] = useState("");

  return (
    <>
      <Header title={t("header.map")} />

      <Styled.Container>
        <Styled.ContainerMap>
          <MapHome setTooltipContent={setContent} />
          <ReactTooltip html={true}>{content}</ReactTooltip>
        </Styled.ContainerMap>

        <Styled.MobileBottomIndicators>
          <Grid>
            <Row style={{ marginBottom: "1em" }}>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={4}>
                <CardStats status="confirmed" title="Confirmados" count="10" />
              </Cell>
            </Row>
            <Row>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={2}>
                <CardStats status="recovered" title="Recuperados" count="10" />
              </Cell>
              <Cell desktopColumns={12} phoneColumns={2} tabletColumns={2}>
                <CardStats status="death" title="Óbitos" count="10" />
              </Cell>
            </Row>
          </Grid>
        </Styled.MobileBottomIndicators>
      </Styled.Container>
    </>
  );
};

export default Brazil;
