// vite.config.js
import { defineConfig } from "file:///C:/Users/Vikash%20Pandey/Desktop/BRAINED_PROJECT/alumni-admin/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Vikash%20Pandey/Desktop/BRAINED_PROJECT/alumni-admin/node_modules/@vitejs/plugin-react/dist/index.mjs";
import reactRefresh from "file:///C:/Users/Vikash%20Pandey/Desktop/BRAINED_PROJECT/alumni-admin/node_modules/@vitejs/plugin-react-refresh/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), reactRefresh()],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    chunkSizeWarningLimit: 5e3
    // Set the limit to an appropriate value
  },
  base: "/Blog-App/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxWaWthc2ggUGFuZGV5XFxcXERlc2t0b3BcXFxcQlJBSU5FRF9QUk9KRUNUXFxcXGFsdW1uaS1hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVmlrYXNoIFBhbmRleVxcXFxEZXNrdG9wXFxcXEJSQUlORURfUFJPSkVDVFxcXFxhbHVtbmktYWRtaW5cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1Zpa2FzaCUyMFBhbmRleS9EZXNrdG9wL0JSQUlORURfUFJPSkVDVC9hbHVtbmktYWRtaW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5cclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuaW1wb3J0IHJlYWN0UmVmcmVzaCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3QtcmVmcmVzaFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIHJlYWN0UmVmcmVzaCgpXSxcclxuXHJcbiAgc2VydmVyOiB7XHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB1c2VQb2xsaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDUwMDAsIC8vIFNldCB0aGUgbGltaXQgdG8gYW4gYXBwcm9wcmlhdGUgdmFsdWVcclxuICB9LFxyXG4gIGJhc2U6IFwiL0FsdW1uaUFkbWluL1wiLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWCxTQUFTLG9CQUFvQjtBQUU5WSxPQUFPLFdBQVc7QUFFbEIsT0FBTyxrQkFBa0I7QUFJekIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFBQSxFQUVqQyxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLHVCQUF1QjtBQUFBO0FBQUEsRUFDekI7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
