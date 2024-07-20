import { Grid, GridProps } from "@mui/material"
import { forwardRef } from "react"
import sizes from "styles/sizes"

type GridContainerProps = GridProps & {
    rowSpacing?: number;
    columnSpacing?: number;
  };

const GridContainer = forwardRef<HTMLDivElement, GridContainerProps>((props, ref) => {
    const {
        rowSpacing = sizes.ROW_SPACING,
        columnSpacing = sizes.COLUMN_SPACING,
        container = true,
        children,
        ...rest
    } = props

    return (
        <Grid
            ref={ref}
            {...rest}
            container={container}
            rowSpacing={rowSpacing}
            columnSpacing={columnSpacing}
            mb={5}
        >
            {children}
        </Grid>
    )
})

export default GridContainer