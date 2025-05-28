I had an issue in Hyprland where my framerate seemed to be about half what my external monitor supports on NixOs.

This was on a laptop with an nvidia gpu, specifically an Asus Zephyrus g15 (ga503). 

To fix it, I had to disable `double frame protection` in my `hyprland.conf`.

Here is the relevant snippet:

```Hyprland.conf
opengl {
    nvidia_anti_flicker = false
}
```

I hope this comes in handy.
