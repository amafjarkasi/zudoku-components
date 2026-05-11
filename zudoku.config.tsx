import { defaultLanguages, type ZudokuConfig } from "zudoku";
import "./public/components.css";

const config: ZudokuConfig = {
  theme: {
    light: {
      primary: "#7c3aed",
      primaryForeground: "#ffffff",
      background: "#fafbfc",
      foreground: "#18181b",
      card: "#ffffff",
      cardForeground: "#18181b",
      popover: "#ffffff",
      popoverForeground: "#18181b",
      border: "#e4e4e7",
      muted: "#f4f4f5",
      mutedForeground: "#71717a",
      accent: "#f4f4f5",
      accentForeground: "#18181b",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      radius: "0.625rem",
    },
    dark: {
      primary: "#a78bfa",
      primaryForeground: "#18181b",
      background: "#09090b",
      foreground: "#fafafa",
      card: "#18181b",
      cardForeground: "#fafafa",
      popover: "#18181b",
      popoverForeground: "#fafafa",
      border: "#27272a",
      muted: "#27272a",
      mutedForeground: "#a1a1aa",
      accent: "#27272a",
      accentForeground: "#fafafa",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      radius: "0.625rem",
    },
    fonts: {
      sans: "Inter",
      mono: "Fira Code",
    },
    customCss: `
      :root {
        --font-sans: 'Inter', system-ui, sans-serif;
      }

      header {
        background: rgba(250, 251, 252, 0.85) !important;
        backdrop-filter: blur(12px) !important;
        border-bottom: 1px solid #e4e4e7 !important;
      }

      .dark header {
        background: rgba(9, 9, 11, 0.85) !important;
        border-bottom: 1px solid #27272a !important;
      }

      /* Hide the redundant auto-generated title if it duplicates the first H1 */
      /* Zudoku renders the frontmatter title, so we hide the first H1 if we keep the frontmatter */
      /* Or better: Keep the frontmatter title and remove manual H1s from MDX files */
      
      h1 {
        background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #60a5fa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: -0.02em;
        margin-top: 1rem !important;
        margin-bottom: 2rem !important;
      }

      .dark h1 {
        background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #93c5fd 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .zudoku-card {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border: 1px solid var(--border);
        background: linear-gradient(to bottom right, rgba(0,0,0,0.02), rgba(0,0,0,0.01));
      }

      .dark .zudoku-card {
        background: linear-gradient(to bottom right, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      }

      .zudoku-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 24px -8px rgba(124, 58, 237, 0.15);
        border-color: var(--primary);
      }

      /* Premium Code Blocks: Robust padding and spacing */
      pre {
        border-radius: var(--radius) !important;
        border: 1px solid var(--border) !important;
        background: var(--muted) !important;
        padding: 0 !important;
        margin: 1.5rem 0 !important;
        overflow-x: auto !important;
        font-family: var(--font-mono) !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        position: relative;
        border-left: 4px solid var(--primary) !important;
        /* Make syntax highlighting more vibrant */
        filter: saturate(1.4) contrast(1.05);
      }

      code {
        background: var(--muted) !important;
        padding: 0.2rem 0.4rem !important;
        border-radius: 0.25rem !important;
        font-size: 0.875em !important;
        font-family: var(--font-mono) !important;
      }

      pre code {
        background: transparent !important;
        padding: 1rem 1rem 1rem 0.85rem !important;
        display: block !important;
        width: 100% !important;
        line-height: 1.1 !important;
      }

      .sidebar-item {
        transition: background 0.15s ease, color 0.15s ease;
        border-radius: 0.5rem;
      }

      .sidebar-item:hover {
        background: var(--accent);
      }

      .sidebar-item.active {
        background: var(--primary);
        color: var(--primary-foreground);
      }

      .api-endpoint {
        border: 1px solid var(--border);
        border-radius: var(--radius);
        overflow: hidden;
      }

      .api-endpoint method {
        font-weight: 600;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        text-transform: uppercase;
      }

      .method-get { background: #dcfce7; color: #166534; }
      .method-post { background: #dbeafe; color: #1e40af; }
      .method-put { background: #fef3c7; color: #92400e; }
      .method-delete { background: #fee2e2; color: #991b1b; }
      .method-patch { background: #f3e8ff; color: #6b21a8; }

      .dark .method-get { background: #166534; color: #dcfce7; }
      .dark .method-post { background: #1e40af; color: #dbeafe; }
      .dark .method-put { background: #92400e; color: #fef3c7; }
      .dark .method-delete { background: #991b1b; color: #fee2e2; }
      .dark .method-patch { background: #6b21a8; color: #f3e8ff; }

      /* Left-Aligned Layout: Pin content to the left edge and constrain width for premium feel */
      .grid.max-w-screen-2xl,
      header .max-w-screen-2xl,
      .lg\\:mx-auto,
      main {
        max-width: 1440px !important;
        margin-left: 0 !important;
        margin-right: auto !important;
        width: 100% !important;
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }

      /* Fix Table of Contents drift */
      aside.zudoku-toc {
        justify-self: start !important;
        margin-left: 2rem !important;
      }

      /* ============================================
         LOGO STYLING
         ============================================
         CSS classes for the Zu text logo:
         
         .zu-logo - Base logo container
         .zu-logo--sm - Small size (32px height)
         .zu-logo--md - Medium size (48px height, default)
         .zu-logo--lg - Large size (64px height)
         
         Usage:
         <span class="zu-logo zu-logo--md">Zu</span>
         
         Theme-aware: automatically uses primary color,
         works in both light and dark modes.
         ============================================ */
      
      .zu-logo {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        font-weight: 700;
        letter-spacing: -0.02em;
        display: inline-flex;
        align-items: center;
        transition: opacity 0.2s ease;
      }
      
      .zu-logo:hover {
        opacity: 0.85;
      }
      
      .zu-logo--sm {
        font-size: 14px;
        height: 32px;
      }
      
      .zu-logo--md {
        font-size: 20px;
        height: 48px;
      }
      
      .zu-logo--lg {
        font-size: 28px;
        height: 64px;
      }
      
      /* Logo text color - adapts to theme */
      .zu-logo {
        color: #7c3aed; /* Primary violet for light mode */
      }
      
      .dark .zu-logo {
        color: #a78bfa; /* Lighter violet for dark mode */
      }
      
      /* Responsive logo sizing */
      @media (max-width: 768px) {
        .zu-logo--lg {
          font-size: 22px;
          height: 48px;
        }
      }
      
      @media (max-width: 480px) {
        .zu-logo--md,
        .zu-logo--lg {
          font-size: 18px;
          height: 40px;
        }
      }

      /* ============================================
         COPY BUTTON FOR CODE BLOCKS
         ============================================
         CSS-only hover-reveal copy button using
         checkbox hack for state management.
         
         Usage in MDX - Standard code fences:
         // code block example
         
         The button automatically appears on hover
         and shows "Copied!" feedback on click.
         ============================================ */
      
      /* Copy button wrapper - positioned relative to pre */
      pre {
        position: relative;
      }
      
      /* Hidden checkbox for copy state */
      .copy-button-checkbox {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
      }
      
      /* Copy button styling */
      .copy-button {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        padding: 0.35rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 500;
        background: var(--accent);
        color: var(--foreground);
        border: 1px solid var(--border);
        border-radius: 0.375rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.15s ease, background 0.15s ease, color 0.15s ease;
        z-index: 10;
        font-family: var(--font-sans);
        display: flex;
        align-items: center;
        gap: 0.35rem;
      }
      
      /* Copy icon (clipboard) using CSS */
      .copy-button::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background: currentColor;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='14' height='14' x='8' y='8' rx='2' ry='2'/%3E%3Cpath d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'/%3E%3C/svg%3E") center / contain no-repeat;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='14' height='14' x='8' y='8' rx='2' ry='2'/%3E%3Cpath d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'/%3E%3C/svg%3E") center / contain no-repeat;
      }
      
      /* Show copy button on pre hover */
      pre:hover .copy-button {
        opacity: 1;
      }
      
      /* Copy button checked state (Copied!) */
      .copy-button-checkbox:checked + .copy-button {
        background: var(--primary);
        color: var(--primary-foreground);
        border-color: var(--primary);
        opacity: 1;
      }
      
      /* Checkmark icon when copied */
      .copy-button-checkbox:checked + .copy-button::before {
        background: currentColor;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center / contain no-repeat;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center / contain no-repeat;
      }

      /* ============================================
         MULTI-LANGUAGE CODE TABS
         ============================================
         Tabbed interface for showing same code in
         multiple programming languages.
         
         Usage in MDX - Use details/summary pattern:
         <details class="code-tabs">
           <summary>JavaScript</summary>
           // code block
         </details>
         
         Or use the checkbox hack for pure CSS tabs:
         See pages/tutorials/first-integration.mdx
         for full implementation example.
         ============================================ */
      
      /* Code tabs container */
      .code-tabs {
        margin: 1.5rem 0;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        overflow: hidden;
      }
      
      /* Tab list styling */
      .code-tabs-header {
        display: flex;
        background: var(--muted);
        border-bottom: 1px solid var(--border);
        overflow-x: auto;
      }
      
      /* Individual tab button */
      .code-tabs-header label,
      .code-tabs-header button {
        padding: 0.6rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--muted-foreground);
        background: transparent;
        border: none;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: color 0.15s ease, border-color 0.15s ease;
        white-space: nowrap;
        font-family: var(--font-sans);
      }
      
      .code-tabs-header label:hover,
      .code-tabs-header button:hover {
        color: var(--foreground);
      }
      
      /* Active tab state */
      .code-tabs-header input:checked + label,
      .code-tabs-header button.active {
        color: var(--primary);
        border-bottom-color: var(--primary);
      }
      
      /* Hide radio inputs */
      .code-tabs-header input[type="radio"] {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
      }
      
      /* Tab content areas */
      .code-tab-content {
        display: none;
      }
      
      .code-tab-content.active {
        display: block;
      }
      
      /* Legacy details/summary style for code tabs */
      .code-tabs details {
        margin: 0;
      }
      
      .code-tabs summary {
        padding: 0.6rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--muted-foreground);
        background: var(--muted);
        cursor: pointer;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-bottom: 1px solid var(--border);
      }
      
      .code-tabs summary::-webkit-details-marker {
        display: none;
      }
      
      .code-tabs summary::before {
        content: "▶";
        font-size: 0.625rem;
        transition: transform 0.15s ease;
      }
      
      .code-tabs details[open] summary::before {
        transform: rotate(90deg);
      }
      
      .code-tabs details pre {
        margin: 0;
        border: none;
        border-radius: 0;
      }

      /* ============================================
         API ENDPOINT BADGE
         ============================================
         Method-colored badges for displaying API
         endpoints with their HTTP methods.
         
         Usage in MDX:
         <span class="endpoint-badge endpoint-badge--get">GET</span>
         <span class="endpoint-badge endpoint-badge--post">POST</span>
         
         Or use the inline badge pattern:
         <span class="badge-get">GET</span>
         ============================================ */
      
      /* Base endpoint badge */
      .endpoint-badge {
        display: inline-flex;
        align-items: center;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 0.25rem;
        letter-spacing: 0.025em;
      }
      
      /* HTTP method badge variants */
      .endpoint-badge--get,
      .badge-get {
        background: #dcfce7;
        color: #166534;
      }
      
      .endpoint-badge--post,
      .badge-post {
        background: #dbeafe;
        color: #1e40af;
      }
      
      .endpoint-badge--put,
      .badge-put {
        background: #fef3c7;
        color: #92400e;
      }
      
      .endpoint-badge--delete,
      .badge-delete {
        background: #fee2e2;
        color: #991b1b;
      }
      
      .endpoint-badge--patch,
      .badge-patch {
        background: #f3e8ff;
        color: #6b21a8;
      }
      
      /* Dark mode method badges */
      .dark .endpoint-badge--get,
      .dark .badge-get {
        background: #166534;
        color: #dcfce7;
      }
      
      .dark .endpoint-badge--post,
      .dark .badge-post {
        background: #1e40af;
        color: #dbeafe;
      }
      
      .dark .endpoint-badge--put,
      .dark .badge-put {
        background: #92400e;
        color: #fef3c7;
      }
      
      .dark .endpoint-badge--delete,
      .dark .badge-delete {
        background: #991b1b;
        color: #fee2e2;
      }
      
      .dark .endpoint-badge--patch,
      .dark .badge-patch {
        background: #6b21a8;
        color: #f3e8ff;
      }
      
      /* API Endpoint row styling */
      .api-endpoint-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin: 1rem 0;
        background: var(--card);
      }
      
      .api-endpoint-path {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        color: var(--foreground);
      }
      
      .api-endpoint-desc {
        margin-left: auto;
        color: var(--muted-foreground);
        font-size: 0.875rem;
      }

      /* ============================================
         RATE LIMIT VISUALIZATION
         ============================================
         Progress bar showing rate limit usage with
         reset countdown display.
         
         Usage in MDX:
         <div class="rate-limit-viz">
           <div class="rate-limit-header">
             <span>Rate Limit Usage</span>
             <span>750 / 1000 remaining</span>
           </div>
           <div class="rate-limit-bar">
             <div class="rate-limit-fill" style="width: 25%"></div>
           </div>
           <div class="rate-limit-footer">
             <span>Used: 250</span>
             <span>Resets in: 45s</span>
           </div>
         </div>
         ============================================ */
      
      /* Rate limit visualization container */
      .rate-limit-viz {
        padding: 1rem;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin: 1rem 0;
        background: var(--card);
      }
      
      /* Header row */
      .rate-limit-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
        font-size: 0.875rem;
      }
      
      .rate-limit-header span:first-child {
        font-weight: 600;
        color: var(--foreground);
      }
      
      .rate-limit-header span:last-child {
        color: var(--muted-foreground);
        font-family: var(--font-mono);
      }
      
      /* Progress bar container */
      .rate-limit-bar {
        height: 8px;
        background: var(--muted);
        border-radius: 4px;
        overflow: hidden;
      }
      
      /* Progress fill */
      .rate-limit-fill {
        height: 100%;
        background: var(--primary);
        border-radius: 4px;
        transition: width 0.3s ease;
      }
      
      /* Warning state when > 80% used */
      .rate-limit-fill.warning {
        background: var(--destructive);
      }
      
      /* Critical state when > 95% used */
      .rate-limit-fill.critical {
        background: #991b1b;
      }
      
      /* Footer row */
      .rate-limit-footer {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        font-size: 0.75rem;
        color: var(--muted-foreground);
      }
      
      .rate-limit-footer span {
        font-family: var(--font-mono);
      }
      
      /* Inline rate limit badge (compact) */
      .rate-limit-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.2rem 0.5rem;
        font-size: 0.75rem;
        font-family: var(--font-mono);
        background: var(--muted);
        border: 1px solid var(--border);
        border-radius: 0.25rem;
      }
      
      .rate-limit-badge-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--primary);
      }
      
      .rate-limit-badge.warning .rate-limit-badge-dot {
        background: var(--destructive);
      }

      /* ============================================
         PERSISTENT TABS WITH LOCALSTORAGE
         ============================================
         Extended CodeTabs with language preference
         persistence across page visits.
         
         Usage in MDX:
         <div class="persistent-tabs" data-storage-key="zu-preferred-language">
           <div class="code-tabs-header">
             <input type="radio" name="lang" id="tab-js" value="js" />
             <label for="tab-js">JavaScript</label>
             <input type="radio" name="lang" id="tab-py" value="python" />
             <label for="tab-py">Python</label>
           </div>
           <div class="code-tab-content" data-lang="js">...code...</div>
           <div class="code-tab-content" data-lang="python">...code...</div>
         </div>
         ============================================ */
      
      /* Persistent tabs container */
      .persistent-tabs {
        margin: 1.5rem 0;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        overflow: hidden;
      }
      
      /* Fade animation for tab content switching */
      .persistent-tabs .code-tab-content {
        animation: fadeIn 0.2s ease-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      /* ============================================
         TUTORIAL PROGRESS TRACKER
         ============================================
         Step-by-step progress indicator for 
         multi-step tutorials.
         
         Usage in MDX:
         <div class="tutorial-progress">
           <div class="tutorial-step tutorial-step--completed">
             <div class="tutorial-step__number">1</div>
             <div class="tutorial-step__label">Prerequisites</div>
           </div>
           <div class="tutorial-step tutorial-step--current">
             <div class="tutorial-step__number">2</div>
             <div class="tutorial-step__label">Authentication</div>
           </div>
           <div class="tutorial-step tutorial-step--pending">
             <div class="tutorial-step__number">3</div>
             <div class="tutorial-step__label">Create Order</div>
           </div>
         </div>
         ============================================ */
      
      /* Progress container */
      .tutorial-progress {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 2rem 0;
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        position: relative;
      }
      
      /* Connecting line between steps */
      .tutorial-progress::before {
        content: "";
        position: absolute;
        top: 2.25rem;
        left: 3rem;
        right: 3rem;
        height: 2px;
        background: var(--border);
        z-index: 0;
      }
      
      /* Individual step */
      .tutorial-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        flex: 1;
        max-width: 120px;
      }
      
      /* Step number circle */
      .tutorial-step__number {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
      }
      
      /* Step label */
      .tutorial-step__label {
        font-size: 0.75rem;
        text-align: center;
        color: var(--muted-foreground);
        line-height: 1.3;
      }
      
      /* Pending state - gray circle */
      .tutorial-step--pending .tutorial-step__number {
        background: var(--muted);
        color: var(--muted-foreground);
        border: 2px solid var(--border);
      }
      
      .tutorial-step--pending .tutorial-step__label {
        color: var(--muted-foreground);
      }
      
      /* Current state - violet with pulse */
      .tutorial-step--current .tutorial-step__number {
        background: var(--primary);
        color: var(--primary-foreground);
        border: 2px solid var(--primary);
        animation: pulse 2s ease-in-out infinite;
      }
      
      .tutorial-step--current .tutorial-step__label {
        color: var(--foreground);
        font-weight: 500;
      }
      
      @keyframes pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4); }
        50% { box-shadow: 0 0 0 8px rgba(124, 58, 237, 0); }
      }
      
      /* Completed state - green with checkmark */
      .tutorial-step--completed .tutorial-step__number {
        background: #166534;
        color: #dcfce7;
        border: 2px solid #166534;
      }
      
      /* Checkmark icon for completed */
      .tutorial-step--completed .tutorial-step__number::after {
        content: "✓";
        font-size: 1rem;
      }
      
      .tutorial-step--completed .tutorial-step__label {
        color: var(--foreground);
      }
      
      /* Dark mode adjustments for tutorial progress */
      .dark .tutorial-step--completed .tutorial-step__number {
        background: #166534;
        color: #dcfce7;
        border-color: #166534;
      }
      
      .dark .tutorial-step--current .tutorial-step__number {
        background: var(--primary);
        color: var(--primary-foreground);
        border-color: var(--primary);
      }
      
      .dark .tutorial-progress::before {
        background: var(--border);
      }
      
      /* Mobile responsive */
      @media (max-width: 640px) {
        .tutorial-progress {
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
        }
        
        .tutorial-progress::before {
          top: 0;
          bottom: 0;
          left: 1.5rem;
          right: auto;
          width: 2px;
          height: auto;
        }
        
        .tutorial-step {
          flex-direction: row;
          max-width: none;
          gap: 1rem;
        }
        
        .tutorial-step__number {
          margin-bottom: 0;
        }
        
        .tutorial-step__label {
          text-align: left;
        }
      }

      /* ============================================
         MERMAID DIAGRAM STYLING
         ============================================
         Theme-aware styling for Mermaid diagrams.
         ============================================ */
      
      /* Mermaid diagram container */
      .mermaid {
        margin: 1.5rem 0;
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        display: flex;
        justify-content: center;
      }
      
.mermaid svg {
        max-width: 100%;
        height: auto;
      }

      /* ============================================
         FEATURE DISCOVERY CARDS
         ============================================ */
      .feature-discovery {
        padding: 2rem 0;
      }

      .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .feature-card {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .feature-card:hover {
        border-color: var(--primary);
        box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
        transform: translateY(-2px);
      }

      .feature-card-icon {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .feature-card-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--foreground);
        margin-bottom: 0.5rem;
      }

      .feature-card-desc {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        flex: 1;
        margin-bottom: 1rem;
      }

      .feature-card-link {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--primary);
      }

      /* ============================================
         COMMUNITY LINKS BANNER
         ============================================ */
      .community-banner {
        background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%);
        border-radius: var(--radius);
        padding: 2rem;
        text-align: center;
        margin: 2rem 0;
      }

      .community-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        margin-bottom: 0.5rem;
      }

      .community-desc {
        color: rgba(255,255,255,0.85);
        margin-bottom: 1.5rem;
      }

      .community-grid {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .community-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 1.5rem;
        background: rgba(255,255,255,0.15);
        border-radius: 0.5rem;
        color: white;
        text-decoration: none;
        min-width: 100px;
        transition: background 0.2s ease;
      }

      .community-item:hover {
        background: rgba(255,255,255,0.25);
      }

      .community-icon {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .community-info {
        font-size: 0.75rem;
        opacity: 0.9;
      }

      .community-badge {
        font-weight: 600;
      }

      /* ============================================
         CHANGELOG TIMELINE
         ============================================ */
      .changelog-timeline {
        margin: 2rem 0;
        position: relative;
        padding-left: 2rem;
      }

      .changelog-timeline::before {
        content: "";
        position: absolute;
        left: 0.5rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--border);
      }

      .changelog-item {
        position: relative;
        padding-bottom: 1.5rem;
      }

      .changelog-item::before {
        content: "";
        position: absolute;
        left: -2rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: var(--primary);
        border: 2px solid var(--background);
      }

      .changelog-date {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        font-family: var(--font-mono);
        margin-bottom: 0.25rem;
      }

      .changelog-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--foreground);
        margin-bottom: 0.25rem;
      }

      .changelog-desc {
        font-size: 0.875rem;
        color: var(--muted-foreground);
      }

      .changelog-badge {
        display: inline-block;
        padding: 0.125rem 0.5rem;
        font-size: 0.625rem;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
      }

      .changelog-badge--new { background: #dcfce7; color: #166534; }
      .changelog-badge--improved { background: #dbeafe; color: #1e40af; }
      .changelog-badge--fixed { background: #fef3c7; color: #92400e; }
      .changelog-badge--deprecated { background: #fee2e2; color: #991b1b; }

      /* ============================================
         STATUS PAGE
         ============================================ */
      .status-dashboard {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 1.5rem;
        margin: 1.5rem 0;
      }

      .status-hero {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border);
      }

      .status-indicator {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #22c55e;
      }

      .status-hero--operational .status-indicator {
        background: #22c55e;
      }

      .status-message {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--foreground);
      }

      .status-services {
        display: grid;
        gap: 0.75rem;
      }

      .status-service {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        background: var(--muted);
        border-radius: 0.5rem;
      }

      .status-service-name {
        font-weight: 500;
        color: var(--foreground);
      }

      .status-service-badge {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-weight: 500;
      }

      .status-service-badge--up {
        background: #dcfce7;
        color: #166534;
      }

      .incident-item {
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        margin-top: 0.5rem;
        background: var(--card);
      }

      .incident-title {
        font-weight: 600;
        color: var(--foreground);
        margin-bottom: 0.25rem;
      }

      .incident-desc {
        font-size: 0.875rem;
        color: var(--muted-foreground);
      }

      .incident-time {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        font-family: var(--font-mono);
      }

      /* ============================================
         BREADCRUMB NAVIGATION
         ============================================ */
      .breadcrumb {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        margin: 1rem 0;
        flex-wrap: wrap;
      }

      .breadcrumb-item {
        color: var(--muted-foreground);
        text-decoration: none;
        transition: color 0.15s ease;
      }

      .breadcrumb-item:hover {
        color: var(--primary);
      }

      .breadcrumb-item--current {
        color: var(--foreground);
        font-weight: 500;
      }

      .breadcrumb-sep {
        color: var(--muted-foreground);
        font-size: 0.75rem;
      }

      .breadcrumb-icon {
        margin-right: 0.25rem;
      }

      /* ============================================
         TABLE OF CONTENTS
         ============================================ */
      .toc-container {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 1rem;
        margin: 1rem 0;
      }

      .toc-header {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--muted-foreground);
        margin-bottom: 0.75rem;
      }

      .toc-nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .toc-item {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        text-decoration: none;
        padding: 0.25rem 0;
        border-left: 2px solid transparent;
        padding-left: 0.75rem;
        transition: all 0.15s ease;
      }

      .toc-item:hover {
        color: var(--foreground);
        border-left-color: var(--border);
      }

      .toc-item--active {
        color: var(--primary);
        border-left-color: var(--primary);
        font-weight: 500;
      }

      .toc-item--nested {
        padding-left: 1.5rem;
        font-size: 0.8125rem;
      }

      .toc-item--nested-2 {
        padding-left: 2.25rem;
        font-size: 0.75rem;
      }

      /* ============================================
         PREV/NEXT NAVIGATION
         ============================================ */
      .prev-next {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 2rem 0;
      }

      .prev-next-item {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .prev-next-item:hover {
        border-color: var(--primary);
        box-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);
      }

      .prev-next-item--empty {
        opacity: 0.5;
        pointer-events: none;
      }

      .prev-next-label {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.25rem;
      }

      .prev-next-title {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--foreground);
      }

      .prev-next-desc {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        margin-top: 0.25rem;
      }

      .prev-next-item--next {
        text-align: right;
      }

      /* ============================================
         VIDEO TUTORIALS
         ============================================ */
      .video-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }

      .video-card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        overflow: hidden;
        transition: all 0.2s ease;
      }

      .video-card:hover {
        border-color: var(--primary);
        box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
        transform: translateY(-2px);
      }

      .video-thumbnail {
        position: relative;
        aspect-ratio: 16/9;
        background: var(--muted);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .video-thumbnail::after {
        content: "▶";
        font-size: 2rem;
        color: white;
        text-shadow: 0 2px 8px rgba(0,0,0,0.3);
      }

      .video-duration {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        background: rgba(0,0,0,0.75);
        color: white;
        font-size: 0.75rem;
        padding: 0.125rem 0.375rem;
        border-radius: 0.25rem;
        font-family: var(--font-mono);
      }

/* ============================================
         FEEDBACK COMPONENT
         ============================================ */
      .feedback-icon {
        font-size: 1.25rem;
      }

      .feedback-message {
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
      }

      .feedback-textarea {
        width: 100%;
        min-height: 80px;
        padding: 0.75rem;
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-family: var(--font-sans);
        resize: vertical;
        margin: 0.75rem 0;
      }

      .feedback-textarea:focus {
        outline: none;
        border-color: var(--primary);
      }

      .feedback-submit {
        padding: 0.5rem 1rem;
        background: var(--primary);
        color: var(--primary-foreground);
        border: none;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: opacity 0.2s ease;
      }

      .feedback-submit:hover {
        opacity: 0.9;
      }

      /* Support links section */
      .support-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1.5rem 0;
      }

      .support-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .support-link:hover {
        border-color: var(--primary);
        box-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);
      }

      .support-icon {
        font-size: 1.5rem;
      }

      .support-content {
        flex: 1;
      }

      .support-content strong {
        display: block;
        color: var(--foreground);
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
      }

      .support-content span {
        color: var(--muted-foreground);
        font-size: 0.75rem;
      }

      /* ============================================
         UPDATE LINKS
         ============================================ */
      .update-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        margin: 1.5rem 0;
      }

      .update-card {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1.25rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
      }

      .update-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
      }

      .update-content {
        flex: 1;
      }

      .update-content strong {
        display: block;
        color: var(--foreground);
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
      }

      .update-content span {
        display: block;
        color: var(--muted-foreground);
        font-size: 0.75rem;
        margin-bottom: 0.75rem;
      }

      .update-link {
        color: var(--primary);
        font-size: 0.8125rem;
        font-weight: 500;
        text-decoration: none;
      }

      .update-link:hover {
        text-decoration: underline;
      }

      /* ============================================
         CONTACT CARDS
         ============================================ */
      .contact-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }

      .contact-card {
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-align: center;
      }

      .contact-card--pro {
        border-color: var(--primary);
        position: relative;
      }

      .contact-card--pro::before {
        content: "POPULAR";
        position: absolute;
        top: -0.75rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: white;
        font-size: 0.625rem;
        font-weight: 600;
        padding: 0.125rem 0.5rem;
        border-radius: 0.25rem;
      }

      .contact-card--enterprise {
        background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%);
        border-color: transparent;
      }

      .contact-card--enterprise .contact-tier,
      .contact-card--enterprise .contact-price,
      .contact-card--enterprise .contact-feature {
        color: white;
      }

      .contact-header {
        margin-bottom: 1rem;
      }

      .contact-tier {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--foreground);
      }

      .contact-price {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary);
        margin-top: 0.25rem;
      }

      .contact-features {
        text-align: left;
        margin-bottom: 1.5rem;
      }

      .contact-feature {
        padding: 0.5rem 0;
        color: var(--muted-foreground);
        font-size: 0.875rem;
        border-bottom: 1px solid var(--border);
      }

      .contact-feature:last-child {
        border-bottom: none;
      }

      /* ============================================
         STATUS PAGE ENHANCEMENTS
         ============================================ */
      .status-time {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        font-family: var(--font-mono);
        margin-left: auto;
      }

      .status-service-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .status-service-bar {
        height: 8px;
        background: var(--muted);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 0.5rem;
      }

      .status-service-fill {
        height: 100%;
        background: #22c55e;
        border-radius: 4px;
        transition: width 0.3s ease;
      }

      .status-service-meta {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        font-family: var(--font-mono);
      }

      .incident-item--resolved {
        opacity: 0.7;
      }

      .incident-status {
        display: inline-block;
        padding: 0.125rem 0.5rem;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: 0.25rem;
        background: #dcfce7;
        color: #166534;
      }

      .incident-item--resolved .incident-status {
        background: #fef3c7;
        color: #92400e;
      }

      .status-subscribe {
        text-align: center;
        padding: 1.5rem;
        background: var(--muted);
        border-radius: var(--radius);
        margin-top: 1.5rem;
      }

      .status-subscribe p {
        color: var(--muted-foreground);
        margin-bottom: 1rem;
      }

      .status-subscribe-btns {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .status-subscribe-btn {
        padding: 0.5rem 1rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        font-size: 0.875rem;
        color: var(--foreground);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .status-subscribe-btn:hover {
        border-color: var(--primary);
        color: var(--primary);
      }

      /* ============================================
         AUTH FLOW ENHANCEMENTS
         ============================================ */
      .auth-flow-content {
        margin-top: 1rem;
      }

      /* ============================================
         VERSION SELECTOR ENHANCEMENTS
         ============================================ */
      .version-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        font-size: 0.875rem;
        color: var(--foreground);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .version-btn:hover {
        border-color: var(--primary);
      }

      .version-option {
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .version-option:hover {
        background: var(--accent);
      }

      .version-option--active {
        background: var(--primary);
        color: var(--primary-foreground);
      }

      .version-option--link {
        color: var(--primary);
        font-weight: 500;
      }

      .version-tag {
        padding: 0.125rem 0.375rem;
        font-size: 0.625rem;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
      }

      .version-tag--new { background: #dcfce7; color: #166534; }
      .version-tag--beta { background: #fef3c7; color: #92400e; }
      .version-tag--deprecated { background: #fee2e2; color: #991b1b; }

      .version-divider {
        height: 1px;
        background: var(--border);
        margin: 0.75rem 0;
      }

      /* ============================================
         SEARCH COMPONENT ENHANCEMENTS
         ============================================ */
      .search-input-wrapper--active {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
      }

      .shortcuts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.75rem;
        margin: 1rem 0;
      }

      .shortcut-desc {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        margin-top: 0.25rem;
      }

      .search-inline {
        display: inline-flex;
        align-items: center;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 0.375rem 0.75rem;
        gap: 0.5rem;
      }

      .search-inline-icon {
        color: var(--muted-foreground);
      }

      .search-inline-input {
        background: none;
        border: none;
        outline: none;
        font-size: 0.875rem;
        color: var(--foreground);
        width: 150px;
      }

      .search-inline-input::placeholder {
        color: var(--muted-foreground);
      }

      /* ============================================
         TIMELINE ENHANCEMENTS
         ============================================ */
      .timeline-content {
        padding-left: 1rem;
      }

      .timeline-date {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        font-family: var(--font-mono);
        margin-bottom: 0.25rem;
      }

      .timeline-marker--past::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: #166534;
        border-radius: 50%;
      }

      /* ============================================
         CARD GRID ENHANCEMENTS
         ============================================ */
      .stat-card {
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-align: center;
      }

      .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: var(--foreground);
        margin-bottom: 0.25rem;
      }

      .stat-label {
        font-size: 0.875rem;
        color: var(--muted-foreground);
      }

      .feature-card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }

      .feature-card-image {
        width: 100%;
        aspect-ratio: 16/9;
        background: var(--muted);
        border-radius: var(--radius);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
      }

      .feature-card-content {
        flex: 1;
      }

      /* ============================================
         PROGRESS INDICATORS ENHANCEMENTS
         ============================================ */
      .step-progress {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 2rem 0;
        position: relative;
      }

      .step-progress::before {
        content: "";
        position: absolute;
        top: 1rem;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--border);
        z-index: 0;
      }

      .step-progress-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        flex: 1;
        max-width: 100px;
      }

      .step-progress-marker {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        background: var(--muted);
        color: var(--muted-foreground);
        border: 2px solid var(--border);
      }

      .step-progress-item--completed .step-progress-marker {
        background: #166534;
        color: white;
        border-color: #166534;
      }

      .step-progress-item--active .step-progress-marker {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
        animation: pulse 2s ease-in-out infinite;
      }

      .step-progress-label {
        font-size: 0.75rem;
        text-align: center;
        color: var(--muted-foreground);
      }

      /* ============================================
         BADGES AND TAGS ENHANCEMENTS
         ============================================ */
      .badge--default {
        background: var(--muted);
        color: var(--foreground);
      }

      .badge--md {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
      }

      .badge--icon {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
      }

      .tag-showcase {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        padding: 1rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
      }

      .method-badge {
        display: inline-flex;
        align-items: center;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 0.25rem;
        font-family: var(--font-mono);
      }

      .method-badge--get { background: #dcfce7; color: #166534; }
      .method-badge--post { background: #dbeafe; color: #1e40af; }
      .method-badge--put { background: #fef3c7; color: #92400e; }
      .method-badge--patch { background: #f3e8ff; color: #6b21a8; }
      .method-badge--delete { background: #fee2e2; color: #991b1b; }

      .dark .method-badge--get { background: #166534; color: #dcfce7; }
      .dark .method-badge--post { background: #1e40af; color: #dbeafe; }
      .dark .method-badge--put { background: #92400e; color: #fef3c7; }
      .dark .method-badge--patch { background: #6b21a8; color: #f3e8ff; }
      .dark .method-badge--delete { background: #991b1b; color: #fee2e2; }

      .plan-badge {
        display: inline-flex;
        align-items: center;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        border-radius: 9999px;
      }

      .plan-badge--free { background: var(--muted); color: var(--foreground); }
      .plan-badge--pro { background: var(--primary); color: var(--primary-foreground); }
      .plan-badge--enterprise { background: var(--foreground); color: var(--background); }

      /* ============================================
         ANNOUNCEMENT BAR ENHANCEMENTS
         ============================================ */
      .announcement-icon {
        font-size: 1.25rem;
        flex-shrink: 0;
      }

      /* ============================================
         IMAGE LIGHTBOX ENHANCEMENTS
         ============================================ */
      .lightbox-container {
        position: relative;
      }

      .lightbox-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: rgba(0,0,0,0.5);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.25rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease;
      }

      .lightbox-nav:hover {
        background: rgba(0,0,0,0.8);
      }

      .lightbox-nav--prev { left: 1rem; }
      .lightbox-nav--next { right: 1rem; }

      .lightbox-placeholder--tall {
        aspect-ratio: 3/4;
      }

      .lightbox-placeholder--small {
        aspect-ratio: 1;
      }

      .lightbox-content--small {
        max-width: 300px;
      }

      /* ============================================
         INTEGRATION SHOWCASE ENHANCEMENTS
         ============================================ */
      .integration-cta {
        margin-top: 2rem;
        padding: 2rem;
        background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%);
        border-radius: var(--radius);
        text-align: center;
      }

      .integration-cta-content {
        color: white;
      }

      .integration-cta-content h3 {
        color: white;
        margin-bottom: 0.5rem;
      }

      .integration-cta-content p {
        opacity: 0.9;
        margin-bottom: 1rem;
      }

      .integration-cta-arrow {
        font-size: 1.5rem;
        margin-left: 0.5rem;
      }

      /* ============================================
         SOCIAL PROOF ENHANCEMENTS
         ============================================ */
      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }

      .metric-card {
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-align: center;
      }

      .metric-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--foreground);
        margin-bottom: 0.25rem;
      }

      .metric-label {
        font-size: 0.875rem;
        color: var(--muted-foreground);
      }

      .logo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 1rem;
        align-items: center;
        margin: 1.5rem 0;
      }

      .logo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        font-size: 1.5rem;
        color: var(--muted-foreground);
      }

      .badge-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
      }

      .integration-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.375rem 0.75rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        font-size: 0.8125rem;
      }

      .integration-badge-icon {
        font-size: 1rem;
      }

    `,
  },
};

export default config;