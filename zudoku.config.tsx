import { defaultLanguages, type ZudokuConfig } from "zudoku";

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

      .video-info {
        padding: 1rem;
      }

      .video-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--foreground);
        margin-bottom: 0.5rem;
      }

      .video-meta {
        font-size: 0.75rem;
        color: var(--muted-foreground);
      }

      /* ============================================
         PAGE FEEDBACK
         ============================================ */
      .feedback-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin: 2rem 0;
        text-align: center;
      }

      .feedback-question {
        font-size: 1rem;
        font-weight: 500;
        color: var(--foreground);
        margin-bottom: 1rem;
      }

      .feedback-buttons {
        display: flex;
        gap: 1rem;
      }

      .feedback-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        background: var(--card);
        color: var(--foreground);
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .feedback-btn:hover {
        border-color: var(--primary);
        color: var(--primary);
      }

      .feedback-btn--yes:hover {
        background: #dcfce7;
        border-color: #166534;
        color: #166534;
      }

      .feedback-btn--no:hover {
        background: #fee2e2;
        border-color: #991b1b;
        color: #991b1b;
      }

      .feedback-response {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
      }

      .feedback-response--yes {
        background: #dcfce7;
        color: #166534;
      }

      .feedback-response--no {
        background: #fee2e2;
        color: #991b1b;
      }

      /* ============================================
         INTEGRATION SHOWCASE
         ============================================ */
      .integration-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 1rem;
        margin: 1.5rem 0;
      }

      .integration-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 1rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .integration-card:hover {
        border-color: var(--primary);
        transform: translateY(-2px);
      }

      .integration-logo {
        font-size: 2rem;
        margin-bottom: 0.75rem;
      }

      .integration-name {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--foreground);
        margin-bottom: 0.25rem;
      }

      .integration-status {
        font-size: 0.75rem;
        padding: 0.125rem 0.5rem;
        border-radius: 0.25rem;
      }

      .integration-status--supported {
        background: #dcfce7;
        color: #166534;
      }

      .integration-status--coming {
        background: #fef3c7;
        color: #92400e;
      }

      /* ============================================
         SDK COMPARISON
         ============================================ */
      .sdk-install-grid {
        margin: 1.5rem 0;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        overflow: hidden;
      }

      .sdk-install-header {
        display: grid;
        grid-template-columns: 100px 1fr 120px;
        background: var(--muted);
        padding: 0.75rem 1rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--muted-foreground);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .sdk-install-item {
        display: grid;
        grid-template-columns: 100px 1fr 120px;
        padding: 0.75rem 1rem;
        border-top: 1px solid var(--border);
        align-items: center;
      }

      .sdk-lang-badge {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--foreground);
      }

      .sdk-install-item pre {
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        font-family: var(--font-mono);
        font-size: 0.8125rem;
      }

      /* ============================================
         SUPPORT SECTION
         ============================================ */
      .support-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }

      .support-card {
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        text-align: center;
      }

      .support-card--pro {
        border-color: var(--primary);
        position: relative;
      }

      .support-card--pro::before {
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

      .support-card-icon {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .support-card-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--foreground);
        margin-bottom: 0.5rem;
      }

      .support-card-desc {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        margin-bottom: 1rem;
      }

      .contact-btn {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .contact-btn--primary {
        background: var(--primary);
        color: var(--primary-foreground);
      }

      .contact-btn--primary:hover {
        opacity: 0.9;
      }

      .contact-btn--enterprise {
        background: var(--foreground);
        color: var(--background);
      }

      /* ============================================
         CARD GRID
         ============================================ */
      .card-grid {
        display: grid;
        gap: 1.5rem;
        margin: 1.5rem 0;
      }

      .card-grid--2 { grid-template-columns: repeat(2, 1fr); }
      .card-grid--3 { grid-template-columns: repeat(3, 1fr); }
      .card-grid--4 { grid-template-columns: repeat(4, 1fr); }

      @media (max-width: 768px) {
        .card-grid--2,
        .card-grid--3,
        .card-grid--4 {
          grid-template-columns: 1fr;
        }
      }

      .card {
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
      }

      .card-icon {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .card-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--foreground);
        margin-bottom: 0.5rem;
      }

      .card-desc {
        font-size: 0.875rem;
        color: var(--muted-foreground);
      }

      .card-link {
        display: inline-block;
        margin-top: 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--primary);
        text-decoration: none;
      }

      /* ============================================
         BADGES AND TAGS
         ============================================ */
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: 0.25rem;
        background: var(--muted);
        color: var(--foreground);
      }

      .badge--primary { background: var(--primary); color: var(--primary-foreground); }
      .badge--success { background: #dcfce7; color: #166534; }
      .badge--warning { background: #fef3c7; color: #92400e; }
      .badge--danger { background: #fee2e2; color: #991b1b; }
      .badge--info { background: #dbeafe; color: #1e40af; }

      .badge--lg { padding: 0.375rem 0.75rem; font-size: 0.875rem; }
      .badge--sm { padding: 0.125rem 0.375rem; font-size: 0.625rem; }

      .badge-showcase {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin: 1rem 0;
      }

      .tag {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        background: var(--accent);
        color: var(--accent-foreground);
        border-radius: 9999px;
      }

      .tag--removable::after {
        content: "×";
        margin-left: 0.25rem;
        cursor: pointer;
      }

      /* ============================================
         CALLOUT BOX
         ============================================ */
      .callout {
        margin: 1rem 0;
        border-radius: var(--radius);
        overflow: hidden;
      }

      .callout-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        font-weight: 600;
        font-size: 0.875rem;
      }

      .callout-icon {
        font-size: 1rem;
      }

      .callout-body {
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
        background: var(--card);
      }

      .callout--info { border: 1px solid #dbeafe; }
      .callout--info .callout-header { background: #dbeafe; color: #1e40af; }
      .callout--tip { border: 1px solid #dcfce7; }
      .callout--tip .callout-header { background: #dcfce7; color: #166534; }
      .callout--warning { border: 1px solid #fef3c7; }
      .callout--warning .callout-header { background: #fef3c7; color: #92400e; }
      .callout--caution { border: 1px solid #fed7aa; }
      .callout--caution .callout-header { background: #fed7aa; color: #c2410c; }
      .callout--danger { border: 1px solid #fee2e2; }
      .callout--danger .callout-header { background: #fee2e2; color: #991b1b; }

      .callout-toggle {
        margin-left: auto;
        font-size: 0.75rem;
      }

      /* ============================================
         ALERT BANNER
         ============================================ */
      .alert {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: var(--radius);
        margin: 1rem 0;
      }

      .alert--info { background: #dbeafe; border: 1px solid #93c5fd; }
      .alert--warning { background: #fef3c7; border: 1px solid #fcd34d; }
      .alert--danger { background: #fee2e2; border: 1px solid #fca5a5; }
      .alert--success { background: #dcfce7; border: 1px solid #86efac; }

      .alert-icon {
        font-size: 1.25rem;
        flex-shrink: 0;
      }

      .alert-content {
        flex: 1;
      }

      .alert-title {
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      .alert-desc {
        font-size: 0.875rem;
        opacity: 0.9;
      }

      .alert-action {
        margin-top: 0.5rem;
      }

      .alert-dismiss {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.25rem;
        opacity: 0.5;
        padding: 0;
      }

      /* ============================================
         ANNOUNCEMENT BAR
         ============================================ */
      .announcement-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0.75rem 1rem;
        background: var(--primary);
        color: var(--primary-foreground);
        font-size: 0.875rem;
      }

      .announcement-bar--info { background: #1e40af; }
      .announcement-bar--warning { background: #92400e; }
      .announcement-bar--event { background: #be123c; }

      .announcement-content {
        flex: 1;
        text-align: center;
      }

      .announcement-link {
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
      }

      .announcement-dismiss {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: 1rem;
        opacity: 0.7;
      }

      /* ============================================
         PROGRESS INDICATORS
         ============================================ */
      .progress-container {
        margin: 1.5rem 0;
      }

      .progress-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
      }

      .progress-bar {
        height: 8px;
        background: var(--muted);
        border-radius: 4px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: var(--primary);
        border-radius: 4px;
        transition: width 0.3s ease;
      }

      .progress-fill.warning { background: var(--destructive); }

      .circular-progress-container {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .circular-progress {
        position: relative;
        width: 60px;
        height: 60px;
      }

      .circular-bg {
        fill: none;
        stroke: var(--muted);
        stroke-width: 6;
      }

      .circular-fill {
        fill: none;
        stroke: var(--primary);
        stroke-width: 6;
        stroke-linecap: round;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: stroke-dashoffset 0.3s ease;
      }

      .circular-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75rem;
        font-weight: 600;
      }

      .spinner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .spinner {
        width: 24px;
        height: 24px;
        border: 2px solid var(--border);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .spinner-text {
        font-size: 0.75rem;
        color: var(--muted-foreground);
      }

      .skeleton {
        background: linear-gradient(90deg, var(--muted) 25%, var(--accent) 50%, var(--muted) 75%);
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 0.25rem;
      }

      .skeleton--text { height: 1rem; width: 100%; }
      .skeleton--text.skeleton--short { width: 60%; }
      .skeleton--avatar { width: 40px; height: 40px; border-radius: 50%; }

      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* ============================================
         SEARCH COMPONENT
         ============================================ */
      .search-container {
        position: relative;
        margin: 1.5rem 0;
      }

      .search-input-wrapper {
        display: flex;
        align-items: center;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 0.5rem 0.75rem;
        gap: 0.5rem;
        transition: border-color 0.15s ease;
      }

      .search-input-wrapper:focus-within {
        border-color: var(--primary);
      }

      .search-input {
        flex: 1;
        background: none;
        border: none;
        outline: none;
        font-size: 0.875rem;
        color: var(--foreground);
      }

      .search-input::placeholder {
        color: var(--muted-foreground);
      }

      .search-shortcut {
        display: flex;
        gap: 0.25rem;
      }

      .shortcut-keys {
        display: inline-flex;
        align-items: center;
        gap: 0.125rem;
      }

      .shortcut-item {
        padding: 0.125rem 0.375rem;
        background: var(--muted);
        border: 1px solid var(--border);
        border-radius: 0.25rem;
        font-size: 0.625rem;
        font-family: var(--font-mono);
      }

      .search-results {
        margin-top: 0.5rem;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: var(--card);
        max-height: 300px;
        overflow-y: auto;
      }

      .search-results-header {
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--muted-foreground);
        border-bottom: 1px solid var(--border);
        background: var(--muted);
      }

      .search-result-item {
        padding: 0.75rem;
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .search-result-item:hover,
      .search-result-item--active {
        background: var(--accent);
      }

      .search-result-title {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--foreground);
      }

      .search-result-path {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        font-family: var(--font-mono);
      }

      /* ============================================
         AUTH FLOWS
         ============================================ */
      .auth-flow-diagram {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 1.5rem;
        margin: 1.5rem 0;
      }

      .auth-flow-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .auth-flow-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 1rem;
        background: var(--muted);
        border-radius: var(--radius);
        text-align: center;
      }

      .auth-flow-step--action { border: 2px solid var(--primary); }
      .auth-flow-step--decision { border: 2px dashed var(--border); }
      .auth-flow-step--success { border: 2px solid #166534; background: #dcfce7; }

      .auth-flow-number {
        width: 1.5rem;
        height: 1.5rem;
        background: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .auth-flow-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--foreground);
      }

      .auth-flow-desc {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        margin-top: 0.25rem;
      }

      .auth-flow-connector {
        width: 2rem;
        height: 2px;
        background: var(--border);
        flex-shrink: 0;
      }

      .auth-flow-connector-down {
        width: 2px;
        height: 2rem;
        background: var(--border);
        align-self: center;
      }

      /* ============================================
         VERSION SELECTOR
         ============================================ */
      .version-selector {
        position: relative;
        display: inline-block;
      }

      .version-dropdown {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        cursor: pointer;
        font-size: 0.875rem;
        color: var(--foreground);
      }

      .version-badge {
        padding: 0.125rem 0.375rem;
        background: var(--primary);
        color: var(--primary-foreground);
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .version-arrow {
        font-size: 0.75rem;
        color: var(--muted-foreground);
      }

      .version-label {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        margin-right: 0.5rem;
      }

      .version-inline {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.875rem;
      }

      .version-inline-link {
        color: var(--muted-foreground);
        text-decoration: none;
        transition: color 0.15s ease;
      }

      .version-inline-link:hover {
        color: var(--foreground);
      }

      .version-inline-link--active {
        color: var(--primary);
        font-weight: 500;
      }

      .version-inline-link--deprecated {
        text-decoration: line-through;
        opacity: 0.7;
      }

      /* ============================================
         TIMELINE
         ============================================ */
      .timeline {
        margin: 1.5rem 0;
        position: relative;
        padding-left: 2rem;
      }

      .timeline--steps::before {
        content: "";
        position: absolute;
        left: 0.5rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--border);
      }

      .timeline-item {
        position: relative;
        padding-bottom: 1.5rem;
      }

      .timeline-item::before {
        content: "";
        position: absolute;
        left: -1.5rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: var(--muted);
        border: 2px solid var(--border);
      }

      .timeline-item--completed::before {
        background: #166534;
        border-color: #166534;
      }

      .timeline-item--current::before {
        background: var(--primary);
        border-color: var(--primary);
        animation: pulse 2s ease-in-out infinite;
      }

      .timeline-marker {
        font-size: 0.75rem;
        color: var(--muted-foreground);
        font-family: var(--font-mono);
        margin-bottom: 0.25rem;
      }

      .timeline-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--foreground);
        margin-bottom: 0.25rem;
      }

      .timeline-desc {
        font-size: 0.875rem;
        color: var(--muted-foreground);
      }

      /* ============================================
         IMAGE LIGHTBOX
         ============================================ */
      .lightbox-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
        margin: 1.5rem 0;
      }

      .lightbox-gallery-item {
        position: relative;
        aspect-ratio: 1;
        background: var(--muted);
        border-radius: var(--radius);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s ease;
      }

      .lightbox-gallery-item:hover {
        transform: scale(1.05);
      }

      .lightbox-preview {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .lightbox-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: var(--muted-foreground);
        font-size: 2rem;
      }

      .lightbox-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.9);
        z-index: 1000;
        align-items: center;
        justify-content: center;
      }

      .lightbox-content {
        max-width: 90vw;
        max-height: 90vh;
      }

      .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
      }

      .lightbox-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        color: white;
        font-size: 0.875rem;
      }

      .lightbox-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
      }

      /* ============================================
         API PARAMETER TABLE
         ============================================ */
      .param-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        font-size: 0.875rem;
      }

      .param-row {
        border-bottom: 1px solid var(--border);
      }

      .param-row--header {
        background: var(--muted);
        font-weight: 600;
        color: var(--muted-foreground);
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
      }

      .param-row--nested {
        padding-left: 1.5rem;
        background: var(--accent);
      }

      .param-col {
        padding: 0.75rem;
        text-align: left;
      }

      .param-col--name {
        font-family: var(--font-mono);
        font-weight: 500;
        color: var(--foreground);
        white-space: nowrap;
      }

      .param-col--type {
        color: var(--muted-foreground);
        font-family: var(--font-mono);
      }

      .param-col--required {
        color: var(--destructive);
        font-weight: 500;
      }

      .param-col--desc {
        color: var(--muted-foreground);
      }

      .param-required {
        color: var(--destructive);
        font-weight: 500;
        font-size: 0.75rem;
      }

      .param-optional {
        color: var(--muted-foreground);
        font-size: 0.75rem;
      }

      /* ============================================
         SIDEBAR NAVIGATION
         ============================================ */
      .sidebar-demo {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 1rem;
        margin: 1rem 0;
      }

      .sidebar-section {
        margin-bottom: 1rem;
      }

      .sidebar-section-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: background 0.15s ease;
      }

      .sidebar-section-header:hover {
        background: var(--accent);
      }

      .sidebar-section-icon {
        font-size: 1rem;
      }

      .sidebar-section-title {
        flex: 1;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--foreground);
      }

      .sidebar-section-content {
        padding-left: 1.5rem;
        margin-top: 0.25rem;
      }

      .sidebar-link {
        display: block;
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
        color: var(--muted-foreground);
        text-decoration: none;
        border-radius: 0.375rem;
        transition: all 0.15s ease;
      }

      .sidebar-link:hover {
        color: var(--foreground);
        background: var(--accent);
      }

      .sidebar-link--active {
        color: var(--primary);
        background: var(--primary);
        background: rgba(124, 58, 237, 0.1);
        font-weight: 500;
      }

      .sidebar-link--disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .sidebar-badge {
        font-size: 0.625rem;
        padding: 0.125rem 0.375rem;
        border-radius: 0.25rem;
        font-weight: 500;
        margin-left: 0.5rem;
      }

      .sidebar-badge--new { background: #dcfce7; color: #166534; }
      .sidebar-badge--beta { background: #fef3c7; color: #92400e; }
      .sidebar-badge--operational { background: #dcfce7; color: #166534; }

      /* ============================================
         FEATURE CHECKLIST
         ============================================ */
      .feature-checklist {
        margin: 1.5rem 0;
      }

      .checklist-item {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.75rem;
        border-bottom: 1px solid var(--border);
      }

      .checklist-item:last-child {
        border-bottom: none;
      }

      .checklist-icon {
        font-size: 1.25rem;
        flex-shrink: 0;
      }

      .checklist-content {
        flex: 1;
      }

      .checklist-title {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--foreground);
        margin-bottom: 0.25rem;
      }

      .checklist-desc {
        font-size: 0.75rem;
        color: var(--muted-foreground);
      }

      .checklist-item--supported .checklist-icon::before {
        content: "✓";
        color: #166534;
      }

      .checklist-item--coming .checklist-icon::before {
        content: "○";
        color: var(--muted-foreground);
      }

      /* ============================================
         SOCIAL PROOF / TESTIMONIALS
         ============================================ */
      .testimonial-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin: 1.5rem 0;
      }

      .testimonial-card {
        padding: 1.5rem;
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: var(--radius);
      }

      .testimonial-content {
        font-size: 0.9375rem;
        color: var(--foreground);
        margin-bottom: 1rem;
        font-style: italic;
      }

      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .testimonial-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
      }

      .testimonial-info {
        flex: 1;
      }

      .testimonial-name {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--foreground);
      }

      .testimonial-role {
        font-size: 0.75rem;
        color: var(--muted-foreground);
      }

    `,
  },
};

export default config;