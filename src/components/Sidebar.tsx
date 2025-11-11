import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Typography,
  Tooltip,
  useMediaQuery,
  useTheme as useMUITheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useThemeMode } from "../context/ThemeContext";
import { sidebarMenuData } from "../data/sidebarMenu";

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const drawerWidth = 220;
const collapsedDrawerWidth = 72;

const Sidebar = ({ mobileOpen, onMobileClose }: SidebarProps) => {
  const { isDark } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();
  const muiTheme = useMUITheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const [collapsed, setCollapsed] = useState(false);

  // Em dispositivos móveis mantemos sempre a versão expandida.
  const isCollapsed = isMobile ? false : collapsed;

  // Ao montar, aplicamos o estado salvo para manter preferências do usuário.
  useEffect(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    if (saved !== null) {
      setCollapsed(saved === "true");
    }
  }, []);

  useEffect(() => {
    // Qualquer mudança é salva para persistir entre sessões/abas.
    localStorage.setItem("sidebarCollapsed", collapsed.toString());
  }, [collapsed]);

  // Determina qual seção do menu deve ser destacada de acordo com a URL atual.
  const getCurrentSection = () => {
    const currentPath = location.pathname;
    for (const section of sidebarMenuData) {
      if (currentPath.startsWith(section.mainPath)) {
        return section;
      }
    }
    return sidebarMenuData[0];
  };

  const currentSection = getCurrentSection();

  const handleNavigation = (path: string) => {
    // Atualiza a rota e fecha o drawer quando estamos no mobile.
    navigate(path);
    if (isMobile) {
      onMobileClose();
    }
  };

  const toggleCollapse = () => {
    // Alterna entre a sidebar colapsada (mini icons) e expandida.
    setCollapsed(!collapsed);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: isDark ? "#1C2128" : "#F8F5EE",
        position: "relative",
      }}
    >
      {/* Header com o título do módulo atual. */}
      <Box
        sx={{
          px: isCollapsed ? 2 : 3,
          py: 3.5,
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "flex-start",
          minHeight: 80,
          borderBottom: isDark
            ? "1px solid rgba(18, 136, 138, 0.15)"
            : "1px solid rgba(14, 106, 107, 0.1)",
        }}
      >
        {!isCollapsed && (
          <Typography
            variant="h6"
            sx={{
              color: isDark ? "#12888A" : "#0E6A6B",
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "0.3px",
            }}
          >
            {currentSection.mainLabel}
          </Typography>
        )}
      </Box>

      {/* Lista de itens relacionada à seção ativa. */}
      <Box sx={{ flexGrow: 1, overflow: "auto", py: 2 }}>
        {/* Separador visual */}
        {!isCollapsed && (
          <Box
            sx={{
              px: 3,
              py: 1.5,
              mb: 0.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: isDark
                  ? "rgba(230, 225, 214, 0.5)"
                  : "rgba(110, 110, 110, 0.7)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
              }}
            >
              Menu
            </Typography>
          </Box>
        )}

        {/* Páginas relacionadas */}
        <Box sx={{ px: isCollapsed ? 1 : 2 }}>
          {currentSection.relatedPages.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Tooltip
                key={item.path}
                title={isCollapsed ? item.label : ""}
                placement="right"
              >
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    borderRadius: 2.5,
                    bgcolor: isActive
                      ? isDark
                        ? "rgba(14, 106, 107, 0.25)"
                        : "rgba(14, 106, 107, 0.15)"
                      : "transparent",
                    color: isActive
                      ? isDark
                        ? "#F8F5EE"
                        : "#0E6A6B"
                      : isDark
                      ? "rgba(248, 245, 238, 0.7)"
                      : "rgba(30, 30, 30, 0.7)",
                    "&:hover": {
                      bgcolor: isActive
                        ? isDark
                          ? "rgba(14, 106, 107, 0.35)"
                          : "rgba(14, 106, 107, 0.25)"
                        : isDark
                        ? "rgba(18, 136, 138, 0.12)"
                        : "rgba(14, 106, 107, 0.08)",
                    },
                    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    py: 1.5,
                    px: isCollapsed ? 1.5 : 2.5,
                    mb: 0.5,
                    justifyContent: isCollapsed ? "center" : "flex-start",
                    minHeight: 48,
                    position: "relative",
                    "&::before": isActive
                      ? {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 3,
                          height: "70%",
                          bgcolor: "#E47B24",
                          borderRadius: "0 2px 2px 0",
                        }
                      : {},
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive
                        ? isDark
                          ? "#F8F5EE"
                          : "#0E6A6B"
                        : isDark
                        ? "rgba(14, 106, 107, 0.8)"
                        : "#0E6A6B",
                      minWidth: isCollapsed ? 0 : 40,
                      justifyContent: "center",
                      mr: isCollapsed ? 0 : 1.5,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!isCollapsed && (
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 400,
                        fontSize: "0.9375rem",
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </Box>
  );

  const currentDrawerWidth = isCollapsed ? collapsedDrawerWidth : drawerWidth;

  return (
    <Box
      component="nav"
      sx={{
        width: { md: currentDrawerWidth },
        flexShrink: { md: 0 },
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
      }}
    >
      {/* Botão de toggle na borda direita - apenas desktop, estilo iFood */}
      {!isMobile && (
        <Tooltip
          title={isCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
          placement="left"
        >
          <IconButton
            onClick={toggleCollapse}
            sx={{
              position: "absolute",
              right: -18,
              top: 20,
              zIndex: 1200,
              width: 34,
              height: 34,
              bgcolor: "#FFFFFF",
              color: "#EA1D2C",
              boxShadow: "0 4px 12px rgba(234, 29, 44, 0.25)",
              border: "1px solid rgba(234, 29, 44, 0.35)",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.25,
              pl: 2.25,
              pr: 1,
              "&:hover": {
                bgcolor: "#FFFFFF",
                boxShadow: "0 6px 18px rgba(234, 29, 44, 0.32)",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            {isCollapsed ? (
              <ChevronRight fontSize="inherit" />
            ) : (
              <ChevronLeft fontSize="inherit" />
            )}
          </IconButton>
        </Tooltip>
      )}
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: isDark ? "#1C2128" : "#F8F5EE",
            borderRight: isDark
              ? "1px solid rgba(18, 136, 138, 0.2)"
              : "1px solid rgba(14, 106, 107, 0.15)",
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: currentDrawerWidth,
            bgcolor: isDark ? "#1C2128" : "#F8F5EE",
            borderRight: isDark
              ? "1px solid rgba(18, 136, 138, 0.2)"
              : "1px solid rgba(14, 106, 107, 0.15)",
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            overflowX: "hidden",
            overflowY: "auto",
            boxShadow: isDark
              ? "2px 0 8px rgba(0, 0, 0, 0.3)"
              : "2px 0 8px rgba(0, 0, 0, 0.05)",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              bgcolor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: isDark
                ? "rgba(18, 136, 138, 0.3)"
                : "rgba(14, 106, 107, 0.25)",
              borderRadius: "3px",
              "&:hover": {
                bgcolor: isDark
                  ? "rgba(18, 136, 138, 0.5)"
                  : "rgba(14, 106, 107, 0.4)",
              },
            },
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
