#pragma header

// Value from (0, 1)
uniform float _amount;

// Converts the input image to grayscale, with `_amount` representing the proportion of the conversion.

void main() {
	gl_FragColor = flixel_texture2D(bitmap, openfl_TextureCoordv);
	if (_amount <= 0.0 || gl_FragColor.a == 0.0) {
		return;
	}

	gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722))), min(_amount, 1.0));
}
