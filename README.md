# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring a Pinterest-style projects gallery.

## ✨ Features

### 🎨 Pinterest-Style Projects Gallery
- **Masonry Layout**: Dynamic grid layout that adapts to different screen sizes
- **Hover Effects**: Beautiful animations and overlays on hover
- **Interactive Modal**: Detailed project view with enhanced information
- **Responsive Design**: Optimized for all device sizes

### 🚀 Modern Tech Stack
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Lucide React** for icons

### 🎯 Key Components
- **Hero Section**: Eye-catching introduction
- **About Section**: Personal information and skills
- **Projects Section**: Pinterest-style gallery with modal details
- **Achievements Section**: Showcase accomplishments
- **Contact Section**: Get in touch form

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5174`

## 📱 Projects Section Features

### Pinterest-Style Layout
- **Masonry Grid**: Columns adapt based on screen size (1-4 columns)
- **Variable Heights**: Each project card has dynamic height for visual interest
- **Smooth Animations**: Staggered entrance animations for cards

### Hover Interactions
- **Image Scaling**: Smooth zoom effect on project images
- **Overlay Gradient**: Beautiful gradient overlay with project information
- **Shimmer Effect**: Subtle shimmer animation on hover
- **Category Badge**: Floating category indicator
- **Technology Tags**: Preview of main technologies used

### Modal Experience
- **Full-Screen Modal**: Detailed project information
- **Enhanced Styling**: Gradient backgrounds and modern design
- **Technology Grid**: Organized display of all technologies
- **Action Buttons**: Direct links to GitHub and live demo
- **Smooth Animations**: Scale-in animation for modal appearance

## 🎨 Design Features

### Color Scheme
- **Primary**: Emerald/Teal gradient (`from-emerald-600 to-teal-600`)
- **Background**: Dark theme with slate colors
- **Accents**: Emerald highlights for interactive elements

### Animations
- **Fade In Up**: Entrance animations for project cards
- **Scale Effects**: Hover transformations
- **Shimmer**: Loading-style effects
- **Smooth Transitions**: All interactions have fluid animations

### Responsive Breakpoints
- **Mobile**: 1 column layout
- **Tablet**: 2 columns
- **Desktop**: 3 columns
- **Large Desktop**: 4 columns

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx      # Pinterest-style gallery
├── App.tsx
├── index.css             # Custom animations & styles
└── main.tsx
```

## 🔧 Customization

### Adding New Projects
Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
{
  id: 9,
  title: 'Your Project Name',
  description: 'Short description',
  longDescription: 'Detailed description for modal',
  image: 'https://your-image-url.jpg',
  tags: ['React', 'TypeScript', 'Tailwind'],
  github: 'https://github.com/username/repo',
  demo: 'https://your-demo-url.com',
  category: 'Full Stack'
}
```

### Modifying Animations
Custom animations are defined in `src/index.css`:
- `fadeInUp`: Card entrance animation
- `scaleIn`: Modal appearance animation
- `shimmer`: Hover effect animation

## 🚀 Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
