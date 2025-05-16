# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the static files for "Persepolis Reimagined", an immersive web experience that allows users to explore the ancient Persian capital during the reign of King Xerxes. The most recent modification appears to involve changes to the text content in `version/1659513005297/js/1.js`, which contains localized text and UI copy that has been adapted to showcase "Dareia AI", a fictional DeFi (Decentralized Finance) platform.

## Repository Structure

- **Root directory**: Contains the main HTML file (index.html), site icons, and manifest
- **version/1659513005297/**: Contains versioned assets:
  - **css/**: Stylesheet files (app.css, vendors.css)
  - **font/**: Custom font files including Maghfirea, Graphik, and SabonNext
  - **js/**: JavaScript files (app.js, vendors.js, 1.js - contains localized text)
  - **static/**: Contains media assets:
    - **audio/**: Sound effects and background music
    - **image/**: UI images, artwork, and 3D textures
    - **video/**: Video content for the experience
    - **webgl/**: 3D scene data for WebGL rendering including textures and JSON scene files

## Site Architecture

This is a static web application that uses a JavaScript framework (likely Vue.js based on the HTML structure) with WebGL for 3D rendering. The site provides an immersive experience for exploring different areas of ancient Persepolis through a series of interconnected "rooms" or scenes.

Key architectural points:
- Uses versioned asset paths (version/1659513005297/) for cache-busting
- Preloads critical assets like fonts
- 3D WebGL scenes are loaded from JSON files
- Features audio elements including background music and UI sounds
- Includes localized text in multiple languages

## Development Notes

### Deploying Changes

To deploy changes:
1. Make your modifications to the relevant files
2. Test the changes locally
3. Commit and push to the repository
4. The site is likely deployed via GitHub Pages or a similar static hosting service

### Content Updates

When updating textual content:
- The main localization strings are in `version/1659513005297/js/1.js`
- The file contains a large JSON object with nested translation keys
- Maintain the existing structure and nesting of keys to ensure all UI elements receive proper text

### Media Assets

When adding or modifying media assets:
- Place files in the appropriate directory under `version/1659513005297/static/`
- For WebGL assets, ensure textures and models are properly referenced in the scene JSON files
- Optimize media files for web delivery (compress images, use efficient video formats)

### 3D Scene Updates

For modifications to 3D scenes:
- Scene data is stored in JSON files under `version/1659513005297/static/webgl/scenes/`
- Each area (e.g., Apadana, GateOfAllNations) has its own JSON configuration file
- Light maps and textures are referenced in these files