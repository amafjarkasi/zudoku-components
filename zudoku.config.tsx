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

      /* Page content header - the one with title, copy button, etc */
      header.flow-root {
        padding-top: 0.25rem !important;
        padding-bottom: 0.75rem !important;
        gap: 0.25rem !important;
      }

      /* Description text in header - add top margin for breathing room */
      header.flow-root .text-sm {
        margin-top: 0.25rem !important;
      }

      /* The page title heading - reduce bottom margin to close gap to hr */
      header.flow-root h1 {
        margin-bottom: 0.5rem !important;
      }

      /* Horizontal rule after header - add top margin for spacing below header text */
      header.flow-root + hr,
      .zudoku-content > hr:first-child {
        margin-top: 0.5rem !important;
        margin-bottom: 1.5rem !important;
      }

      .dark header.flow-root {
        background: rgba(9, 9, 11, 0.85) !important;
      }

      .dark header {
        background: rgba(9, 9, 11, 0.85) !important;
        border-bottom: 1px solid #27272a !important;
      }

      /* Hide the redundant auto-generated title if it duplicates the first H1 */
      /* Zudoku renders the frontmatter title, so we hide the first H1 if we keep the frontmatter */
      
      /* Hide the H1 that appears in the article content (duplicate of frontmatter title in header) */
      article h1 {
        display: none !important;
      }
      
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
         
         .zephyr-logo - Base logo container
         .zephyr-logo--sm - Small size (32px height)
         .zephyr-logo--md - Medium size (48px height, default)
         .zephyr-logo--lg - Large size (64px height)
         
         Usage:
         <span class="zu-logo zu-logo--md">Zu</span>
         
         Theme-aware: automatically uses primary color,
         works in both light and dark modes.
         ============================================ */
      
      .zephyr-logo {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        font-weight: 700;
        letter-spacing: -0.02em;
        display: inline-flex;
        align-items: center;
        transition: opacity 0.2s ease;
      }
      
      .zephyr-logo:hover {
        opacity: 0.85;
      }
      
      .zephyr-logo--sm {
        font-size: 14px;
        height: 32px;
      }
      
      .zephyr-logo--md {
        font-size: 20px;
        height: 48px;
      }
      
      .zephyr-logo--lg {
        font-size: 28px;
        height: 64px;
      }
      
      /* Logo text color - adapts to theme */
      .zephyr-logo {
        color: #7c3aed; /* Primary violet for light mode */
      }
      
      .dark .zephyr-logo {
        color: #a78bfa; /* Lighter violet for dark mode */
      }
      
      /* Responsive logo sizing */
      @media (max-width: 768px) {
        .zephyr-logo--lg {
          font-size: 22px;
          height: 48px;
        }
      }
      
      @media (max-width: 480px) {
        .zephyr-logo--md,
        .zephyr-logo--lg {
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
        content: "Γû╢";
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
        content: "Γ£ô";
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
    `,
  },
  site: {
    logo: {
      src: { light: "/logo-text-light.svg", dark: "/logo-text-dark.svg" },
      alt: "Zephyr",
      width: "280px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            "/auth/getting-started",
            "/auth/oauth2"
          ],
        },
        {
          type: "category",
          label: "Core Concepts",
          icon: "book",
          items: [
            "/advanced/architecture",
            "/advanced/rate-limiting",
            "/advanced/webhooks",
            "/advanced/errors"
          ],
        },
        {
          type: "category",
          label: "E-Commerce",
          icon: "shopping-cart",
          items: [
            "/ecommerce/products",
            "/ecommerce/orders",
            "/ecommerce/inventory",
            {
              type: "link",
              label: "API Reference",
              to: "/api/ecommerce",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          icon: "bar-chart",
          items: [
            "/analytics/events",
            "/analytics/funnels",
            "/analytics/segments",
            {
              type: "link",
              label: "API Reference",
              to: "/api/analytics",
            },
          ],
        },
        {
          type: "category",
          label: "SDKs & Tools",
          icon: "code",
          items: [
            "/sdks/react",
            "/sdks/python",
            "/sdks/cli"
          ],
        },
        {
          type: "category",
          label: "Integrations",
          icon: "plug",
          items: [
            "/integrations/webhooks",
            "/integrations/analytics",
            "/integrations/payment",
            "/integrations/ecommerce"
          ],
        },
        {
          type: "category",
          label: "Migration",
          icon: "arrow-right",
          items: [
            "/migration/from-v1",
            "/migration/from-stripe",
            "/migration/from-shopify"
          ],
        },
        {
          type: "category",
          label: "Best Practices",
          icon: "shield",
          items: [
            "/best-practices/security",
            "/best-practices/performance",
            "/best-practices/reliability"
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          icon: "sparkles",
          items: [
            "/tutorials/first-integration",
            "/tutorials/webhook-handler",
            "/tutorials/batch-processing"
          ],
        },
        {
          type: "category",
          label: "Guides",
          icon: "book",
          items: [
            "/guides/environments",
            "/guides/error-handling",
            "/guides/rate-limits"
          ],
        },
        {
          type: "category",
          label: "Examples",
          icon: "code",
          items: [
            "/examples/ecommerce-full-flow",
            "/examples/analytics-implementation"
          ],
        },
        {
          type: "category",
          label: "Components",
          icon: "palette",
items: [
            "/components/feature-cards",
            "/components/feature-checklist",
            "/components/video-tutorials",
            "/components/page-feedback",
            "/components/community-links",
            "/components/support-section",
            "/components/changelog",
            "/components/status-page",
            "/components/rate-limit-indicator",
            "/components/auth-flows",
            "/components/prev-next-nav",
            "/components/version-selector",
            "/components/api-parameter-table",
            "/components/search-component",
            "/components/alert-banner",
            "/components/announcement-bar",
            "/components/sidebar-navigation",
            "/components/timeline",
            "/components/card-grid",
            "/components/progress-indicators",
            "/components/badges-tags",
            "/components/callout-box",
            "/components/image-lightbox",
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api/ecommerce",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
    {
      type: "file",
      input: "./apis/ecommerce.yaml",
      path: "/api/ecommerce",
    },
    {
      type: "file",
      input: "./apis/analytics.yaml",
      path: "/api/analytics",
    },
    {
      type: "file",
      input: "./apis/auth.yaml",
      path: "/api/auth",
    },
  ],
  // search: { type: "inkeep", options: { apiKey: "...", integrationId: "...", organizationId: "..." } },
metadata: {
    title: "Zephyr Developer Portal",
    description: "API documentation and reference for Zephyr — the next-generation developer platform for e-commerce, analytics, and auth.",
  },
  syntaxHighlighting: {
    languages: [...defaultLanguages, "http"],
    themes: {
      light: "min-light",
      dark: "vitesse-dark",
    },
  },
};

export default config;


