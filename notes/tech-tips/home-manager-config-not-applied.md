I was having an issue where configurations I was trying to apply to a program where not being applied by home-manager.

Removing the program declaration from nix-os fixed the issue.

It seems the nix-os version of the program was taking precendent over the home-manager version and not the other way around.

There is likely another way of doing things that allow the two versions to coexist.

Feel free to send me an email with the solution if ever you find it and I will update this note.
