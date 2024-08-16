#ifdef GL_ES
precision mediump float;
#endif

uniform float u_debug;
uniform float u_time;
uniform vec2 u_resolution;

float plot(vec2 uv){
    // return smoothstep(0.01, 0.02, abs(uv.y - uv.x));
    float k = abs(uv.y - uv.x);
    return smoothstep(0.01, 0.2, k);
}

float plot2(vec2 uv, float pct){
  return  smoothstep( pct-0.2, pct, uv.y) -
          smoothstep( pct, pct+0.02, uv.y);
}

void main(){
    float nTime = mod(u_time, 1.2);
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec4 outColor = vec4(0.0, 0.0, 0.0, 1.0);

    float y = smoothstep(0.0, 1.0, uv.x);
    outColor.r = plot2(uv, nTime);

    gl_FragColor = outColor;
}