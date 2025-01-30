import { Dimensions, PixelRatio } from "react-native";

let width = Dimensions.get('window').width

const fontSize = (size: any) => {
    size = (width > 480 ? size * 0.6 : size) / 3.85;
    // Convert string input to decimal number
    const elemWidth = parseFloat(size);
    return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const size = {
    xs: fontSize(10),
    s: fontSize(12),
    sl: fontSize(13),
    default: fontSize(14),
    md: fontSize(16),
    lg: fontSize(18),
    xlg: fontSize(22),
    vxlg: fontSize(24),
    xxlg: fontSize(30),
    extraxlg: fontSize(42),
    xxxlg: fontSize(48),
};
export { size };