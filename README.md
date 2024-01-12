# Ambience

## Overview

Ambience, a Unique Building Materials Marketplace, is an innovative online platform meticulously designed to bring together construction businesses, architects, designers, and enthusiasts who share a passion for distinct, traditionally crafted building materials sourced globally. This user-friendly platform streamlines the purchasing process, offering seamless access to these unique materials for anyone interested. Beyond transactions, Ambience aims to illuminate the rich cultural heritage, craftsmanship, and diverse techniques behind the creation of these materials.

### Problem

Enthusiasts seeking unique, handcrafted and culturally significant building materials often face challenges in finding and acquiring these items, which are scattered across the globe. 'Ambience' addresses this issue by offering a digital space for its users to explore and purchase authentic, handcrafted building materials that carry cultural significance.

### User Profile

**Building Material Enthusiasts: Architects, Interior Designers, Builders, Home Owners**

- Explore a curated collection of traditionally made interior and exterior building materials.
- Gain insights into the cultural and historical significance of each material and its making techniques.
- Purchase authentic, handmade building materials sourced from artisans around the world.

Example materials: Handpainted floor tiles, Wall claddings, Ceiling tiles, Roof tiles, Partition materials, Coloures glass, etc that are significant to the craftsmanship and architectural practices in different regions of the world.

### Features

1. **Online Marketplace:**

   - Seamless e-commerce features allowing users to browse, search, and purchase traditional building materials from various regions in wholesale and retail quantities.

2. **Craftsmanship Showcase:**

   - A dedicated section to showcase the craftsmanship and creative processes behind each building material.
   - Multimedia content, such as videos and images, illustrating the creation journey.

### Implementation

#### Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: Json

#### APIs

Create a database of construction and decoration materials

#### Sitemap

1. Home
2. Building Material Listings
3. Craftsmanship Showcase
4. Shopping Cart
5. Checkout

#### Mockups

_Mockups will be provided using Figma, showcasing the key screens of the platform._

#### Data

- **Building Material Data:** Contains details about each item, including its history, materials, and pricing.

#### Endpoints

- `/api/categories` (GET)
- `/api/materials` (GET)
- `/api/orders` (POST)
- `/api/craftsmanship` (GET)

#### Auth

Seller Authentication: Nice to have

### Roadmap

**Week 1: Research and Design Planning**

- Understand the needs of building material enthusiasts.
- Create design concepts and features to showcase the history and craftsmanship of each material.

**Week 2: Project Setup and Frontend Development**

- Set up the project structure.
- Implement basic frontend components: Building Material Listings.

**Week 3: Backend Development and Database Integration**

- Develop backend endpoints for building materials and orders.
- Integrate Database for data storage.

**Week 4: Craftsmanship Showcase, Testing, and Deployment**

- Implement the Craftsmanship Showcase feature.
- Conduct thorough testing and bug fixing.
- Deploy the platform for public use.

### Nice-to-haves

User authentication will be implemented for secure login and user profile management.

Payment method and pathway

# Installation Details

To view and run Ambience locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/ambience.git

   ```

2. cd ambience

3. npm install

4. npm run dev

# Additional Instructions

Ensure you have Node.js installed on your machine before running the npm install command.

Verify that you have Git installed for cloning the repository.

Make sure the required backend server (Node.js and Express.js) is running. Update the server URL in the frontend code if needed.

For a smoother development experience, it's recommended to use the latest LTS version of Node.js.

Happy exploring and crafting with Ambience!
