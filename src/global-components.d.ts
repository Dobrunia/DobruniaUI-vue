declare module "vue" {
  export interface GlobalComponents {
    /**
     * Button component with variants and sizes.
     */
    DbrButton: typeof import("./components/DbrButton/DbrButton.vue")["default"];
    /**
     * Button with optional icons and text label.
     */
    DbrIconButton: typeof import("./components/DbrIconButton/DbrIconButton.vue")["default"];
    /**
     * Badge component for short status labels.
     */
    DbrBadge: typeof import("./components/DbrBadge/DbrBadge.vue")["default"];
    /**
     * Checkbox component with optional label.
     */
    DbrCheckbox: typeof import("./components/DbrCheckbox/DbrCheckbox.vue")["default"];
    /**
     * Toggle icon switch (hamburger to close).
     */
    DbrToggle: typeof import("./components/DbrToggle/DbrToggle.vue")["default"];
    /**
     * Base input with label.
     */
    DbrInput: typeof import("./components/DbrInput/DbrInput.vue")["default"];
    /**
     * Avatar component with image or initials fallback.
     */
    DbrAvatar: typeof import("./components/DbrAvatar/DbrAvatar.vue")["default"];
    /**
     * Tooltip component with info icon.
     */
    DbrTooltip: typeof import("./components/DbrTooltip/DbrTooltip.vue")["default"];
    /**
     * Loader component with animated "eyes".
     */
    DbrEyesLoader: typeof import("./components/DbrEyesLoader/DbrEyesLoader.vue")["default"];
    /**
     * Base dot spinner loader.
     */
    DbrLoader: typeof import("./components/DbrLoader/DbrLoader.vue")["default"];
    /**
     * Terminal style loader with typing cursor.
     */
    DbrTerminalLoader: typeof import("./components/DbrTerminalLoader/DbrTerminalLoader.vue")["default"];
    /**
     * Chat list item for a single dialog.
     */
    DbrChatListItem: typeof import("./components/DbrChatListItem/DbrChatListItem.vue")["default"];
    /**
     * Chat message bubble for incoming or outgoing messages.
     */
    DbrChatBubble: typeof import("./components/DbrChatBubble/DbrChatBubble.vue")["default"];
    /**
     * Chat composer with attachments, typing, and send behavior.
     */
    DbrChatComposer: typeof import("./components/DbrChatComposer/DbrChatComposer.vue")["default"];
    /**
     * Theme toggle button.
     */
    DbrThemeToggle: typeof import("./components/DbrThemeToggle/DbrThemeToggle.vue")["default"];
    /**
     * Neumorphic card container with slot content.
     */
    DbrCard: typeof import("./components/DbrCard/DbrCard.vue")["default"];
  }
}

export {};
