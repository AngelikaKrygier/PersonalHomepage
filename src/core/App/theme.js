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
    fontSize: {
        XS: "12px",
        S: "14px",
        sM: "16px",
        M: "17px",
        lM: "18px",
        sXL: "20px",
        XL: "22px",
        lXL: "24px",
        sXXl: "30px",
        XXL: "32px",
        lXXL: "38px",


    },
    lineHeight: {
        basic: "120%",
        medium: "130%",
        large: "140%",

    },
    basicBorderRadious: "4px",
    basicBoxShadow: "0 -2px 50px rgba(9, 10, 51, 0.02), 0p 16px 58px rgba(9, 10, 51, 0.03)",
};

const colorNames = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    semiLightIron: "rgba(209, 213, 218, 0.3)",
    iron: "#D1D5DA",
    semiDarkMineShaft: "rgba(54, 54, 54, 0.72)",
    mineShaft: "#252525",
    anakiwa: "#8CC2FF",
    slateGrey: "#6E7E91",
    shipCove: "#6D93BE",
    dodgerBlue: "#2188FF",
    semiLightScienceBlue: "rgba(3, 102, 214, 0.2)",
    scienceBlue: "#0366D6",
    semiCerulean: "rgb(3, 102, 214, 0.5)",
    semiLightParsley: "rgba(20, 70, 32, 0.2)",
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
            border: colorNames.slateGrey,
            background: colorNames.iron,
            backgroundIcon: colorNames.slateGrey,
            icon: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.semiLightIron,
            hover: colorNames.anakiwa,
            active: colorNames.semiLightParsley,
        },
        section: {
            background: colorNames.white,
            text: colorNames.slateGrey,
            headerUnderline: colorNames.iron,
        },
        spinner: {
            animation: colorNames.scienceBlue,
            border: colorNames.iron,
        },
        tile: {
            background: colorNames.white,
            border: colorNames.semiLightIron,
            borderHover: colorNames.semiLightScienceBlue,
        },
        footer: {
            primary: colorNames.mineShaft,
            hover: colorNames.scienceBlue,
        },
    },
};

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
            border: colorNames.slateGrey,
            background: colorNames.semiDarkMineShaft,
            backgroundIcon: colorNames.white,
            icon: colorNames.mineShaft,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.semiLightIron,
            hover: colorNames.shipCove,
            active: colorNames.semiLightParsley,
        },
        section: {
            background: colorNames.semiDarkMineShaft,
            text: colorNames.white,
            headerUnderline: colorNames.iron,
        },
        spinner: {
            animation: colorNames.scienceBlue,
            border: colorNames.iron,
        },
        tile: {
            background: colorNames.semiDarkMineShaft,
            border: colorNames.semiLightIron,
            borderHover: colorNames.semiCerulean,
        },
        footer: {
            primary: colorNames.white,
            hover: colorNames.dodgerBlue,
        },
    },
};