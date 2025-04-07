#pragma header

uniform float colorAlpha;
uniform float colorRed;
uniform float colorGreen;
uniform float colorBlue;

// The multiply blend mode multiplies the source and destination colors.

void main() {
	gl_FragColor = flixel_texture2D(bitmap, openfl_TextureCoordv) * vec4(colorRed, colorGreen, colorBlue, colorAlpha);
}
