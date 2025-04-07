#pragma header

uniform float colorAlpha;
uniform float colorRed;
uniform float colorGreen;
uniform float colorBlue;

// The subtract blend mode subtracts the source and destination colors.

void main() {
	gl_FragColor = max(flixel_texture2D(bitmap, openfl_TextureCoordv) - vec4(colorRed, colorGreen, colorBlue, colorAlpha), vec4(0.0));
}
