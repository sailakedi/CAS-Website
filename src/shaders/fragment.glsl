varying vec2 vUv; 
varying vec3 vNormal;
varying vec3 vPos;
// 
uniform float u_alpha;
uniform sampler2D u_texture;
uniform bool u_useTexture;
// 
#include ./lights/ambientLight.glsl
#include ./lights/directionalLight.glsl
#include ./lights/pointLight.glsl
// 
void main()
{
    vec3 baseCol = vec3(0.945,0.2,0.263);
    // vec3 baseCol = vec3(0.537,0.082,0.098);
    vec3 darkCol = vec3(0.067,0.067,0.067);
    if(u_useTexture){
        baseCol = mix(baseCol, darkCol, 1.-texture2D(u_texture, vec2(vUv.x, vUv.y)).g);
    }

        vec3 viewDir = normalize(cameraPosition - vPos);
        // Ambient light
    vec3 light = vec3(0.0);
     light += ambientLight(vec3(1.0), 0.1); // params : lightCOlor / lightIntensity (from 0 to 1)
   light +=  pointLight(
        vec3(1., 1., 1.),       //Color
        1.0,                       //Intensity
        vNormal,                   // normals
        vec3(0.0, -0.5, 0.5),        //light  position
        viewDir,                   // viewDirection
        2.0,                     // specular Power
        vPos,                      // Position
        0.25                       //lightDecay
    );  
    // light +=  directionalLight(
    //     vec3(1.),       //Color
    //     1.0,                       //Intensity
    //     vNormal,                   // normals
    //     vec3(0.0, 8., 8.),        //light position
    //     viewDir,                   // viewDirection
    //     10.0                     // specular Power
    // );
        baseCol *= light;

    gl_FragColor = vec4(baseCol, u_alpha);
    // gl_FragColor = vec4(vec3(vUv, 0.5), u_alpha);
}