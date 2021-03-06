#version 330 core

in vec2 uv;
out vec4 end_color;

uniform sampler2D spriteTex;

void main()
{
    vec4 texColor = texture(spriteTex, uv);
    //end_color = vec4(texColor.r, texColor.g, texColor.b texColor.a);

    // BMPs are backwards for some reason.
    end_color = vec4(texColor.a, texColor.b, texColor.g, texColor.r);
}
