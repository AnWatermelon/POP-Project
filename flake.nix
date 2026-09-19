{
  description = "Dev environment for the rotary-dial portfolio (Vue + Vite)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.nodejs_24
          ];

          shellHook = ''
            echo "node $(node --version) / npm $(npm --version)"
            echo "Run 'npm install' once, then 'npm run dev'."
          '';
        };
      });
}
