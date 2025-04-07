#pragma header

uniform float colorAlpha;
uniform float colorRed;
uniform float colorGreen;
uniform float colorBlue;

// The add blend mode adds the source and destination colors.

void main() {
	gl_FragColor = min(flixel_texture2D(bitmap, openfl_TextureCoordv) + vec4(colorRed, colorGreen, colorBlue, colorAlpha), vec4(1.0));
}
