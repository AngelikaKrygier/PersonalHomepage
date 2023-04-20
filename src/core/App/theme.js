const common = {
    breakpoint: {
        mobileMax: 767,
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
        hardBold: 900,
    },
};

const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    iron: "#D1D5DA",
    semiDarkMineShaft: "rgba(54, 54, 54, 0.72)",
    mineShaft: "#252525",
    slateGrey: "#6E7E91",
    dodgerBlue: "#2188FF",
    semiLightScienceBlue: "(209, 213, 218, 0.3)",
    scienceBlue: "#0366D6",
};

export const light = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.mineShaft,
        content: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGrey,
        },
        switchTheme: {
            text: colorNames.slateGrey
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.semiLightScienceBlue,
        },
        section: {
            background: colorNames.white,
            text: colorNames.slateGrey,
            headerUnderline: colorNames.iron,
        },
        tile: {
            background: colorNames.white,
        },
        footer: {
            primary: colorNames.mineShaft,
            hover: colorNames.scienceBlue,
        }
    },
}

export const dark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        content: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        switchTheme: {
            text: colorNames.white
        },
        buttonLink: {
            text: colorNames.white
        },
        section: {
            background: colorNames.semiDarkMineShaft,
            text: colorNames.white,
            headerUnderline: colorNames.iron,
        },
        tile: {
            background: colorNames.semiDarkMineShaft,
        },
        footer: {
            primary: colorNames.white,
            hover: colorNames.dodgerBlue,
        },
    },
};