#pragma header

uniform float colorAlpha;
uniform float colorRed;
uniform float colorGreen;
uniform float colorBlue;

// The darken blend mode changes the color of the destination pixel to the darker of the two constituent colors.
// The RGB values of the provided color are compared to the RGB values of the source pixel.
// If the source pixel is darker, the destination pixel is replaced with the source pixel.
// If the source pixel is lighter, the provided color is used instead..

void main() {
	gl_FragColor = min(flixel_texture2D(bitmap, openfl_TextureCoordv), vec4(colorRed, colorGreen, colorBlue, colorAlpha));
}
