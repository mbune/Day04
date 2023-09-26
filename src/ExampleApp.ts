/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */
import * as gfx from 'gophergfx'

export class ExampleApp extends gfx.GfxApp
{   
    private raindrop: gfx.Mesh2 = new gfx.Mesh2();

    // --- Create the ExampleApp class ---
    constructor()
    {
        super();
    }

    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        
        this.raindrop = gfx.Geometry2Factory.createCircle(0.02);
        this.scene.add(this.raindrop);
        this.raindrop.material.color = gfx.Color.BLUE;
        
        /*
        const hex_geom = new gfx.Line2(gfx.LineMode2.LINE_STRIP);
        const hex_verts: number[] = []; // x1,y1, x2,y2, x3, y4
        for (let i=0; i<=6; i++) {
            const angle = i * Math.PI/3;
            const radius = 0.2;
            hex_verts.push(radius * Math.cos(angle), radius * Math.sin(angle));
        }
        hex_geom.setVertices(hex_verts);
        this.scene.add(hex_geom);
        

        
        const mesh = new gfx.Mesh2();
        mesh.material.drawMode = this.renderer.gl.TRIANGLES;
        const vertices: gfx.Vector2[] = [];
        vertices.push(new gfx.Vector2(.30, .75));
        vertices.push(new gfx.Vector2(.40, .20));
        vertices.push(new gfx.Vector2(.50, .75));
        vertices.push(new gfx.Vector2(.60, .20));
        vertices.push(new gfx.Vector2(.80, .20));
        vertices.push(new gfx.Vector2(.70, .75));
        mesh.setVertices(vertices);
        this.scene.add(mesh);
        

        const circle = new gfx.Mesh2();
        circle.material.drawMode = this.renderer.gl.TRIANGLE_FAN;
        const verts: gfx.Vector2[] = [];

        // vertex 0
        verts.push(new gfx.Vector2(0, 0));

        const nSlices = 50;
        for (let n=0; n<=nSlices; n++) {
            const angle = n * (2*Math.PI)/nSlices;
            // vertex 1, 2, 3, etc..
            verts.push(new gfx.Vector2(0.5 * Math.cos(angle), 0.5 * Math.sin(angle)));
        }
        circle.setVertices(verts);
        this.scene.add(circle);
        */


    }


    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        
        // 2 sceen units in 0.5 seconds
        const speed = -2 / 1;
        const deltaPos = speed * deltaTime;
        this.raindrop.position.y = this.raindrop.position.y + deltaPos;
        if (this.raindrop.position.y < -1.2) {
            this.raindrop.position.y = 1.2;
        }
        

    }
}