# SLiiPS Crosshair 🎯

A highly optimized, fully standalone crosshair UI for FiveM. 

Designed to give your players a massive quality-of-life upgrade, this script allows players to build and save their perfect custom optic without sacrificing a single drop of server performance or bloating your database.

<img width="640" height="596" alt="DKNqnWYETDQ5" src="https://github.com/user-attachments/assets/067d7252-dfb4-457b-a36f-8e1c01d43f01" />
![Kpb9C98mVGqF](https://github.com/user-attachments/assets/bc7000f4-fd97-42e0-bd65-1481fdd70103)




## 🌟 Key Features

* **100% Standalone:** No framework dependencies whatsoever. Works straight out of the box on QBCore, ESX, Qbox, TMC, vRP, or completely custom frameworks.
* **Flawless Performance (0.00ms):** Idles at an absolute `0.00ms` on the resmon. It dynamically disables the default GTA 5 crosshair *only* when a player is actively aiming down sights, ensuring zero frame drops.
* **Client-Side Saving (KVP):** Player configurations are saved directly to their local FiveM client cache using Key-Value Pairs. This means **zero database bloat** and no SQL files to run!
* **10 Custom SVG Reticles:** Uses infinite-resolution mathematical SVG shapes (Dots, Crosses, Chevrons, Mil-Dots, etc.) that will never pixelate or get blurry, no matter the resolution.
* **Deep Customization:** Features a sleek UI with a live color picker, an on/off toggle, and a size scaler (allowing reticles from 5px up to a massive 150px).

## 📥 How to Download & Install

1. Go to the [Releases](https://github.com/your-username/sliips-crosshair/releases) page of this repository (or click the green `Code` button and select `Download ZIP`).
2. Extract the downloaded folder.
3. Rename the extracted folder to exactly **`sliips-crosshair`** (make sure there are no `-main` or `-master` tags at the end of the folder name).
4. Drag and drop the `sliips-crosshair` folder into your server's `resources` directory.
5. Add the following line to your `server.cfg`:
   ```text
   ensure sliips-crosshair
Restart your server or type ensure sliips-crosshair in your live server console.

🎮 Usage / Commands
Simply type the following command in-game to open the configuration UI:

/crosshair

From here, players can toggle the crosshair on/off, adjust the scale, pick an exact hex color, and choose their preferred variant. Clicking Apply & Close will permanently save their setup for all future sessions.

💎 Check out more from SLiiPS Development
If you enjoy the clean, optimized code in this free release, consider supporting the project by checking out our premium server resources:

[SLiiPS Ultimate Systems] - A premium collection of gorgeous, standalone UI minigames and systems.

[🏧 Sliips ATM Waveform Ultimate (v4.0)] - An interactive, modern banking UI with stunning waveform visuals.

🛒 Visit the Store: https://sliips-development.tebex.io/

Enjoy the release, and let me know if you have any feedback!
