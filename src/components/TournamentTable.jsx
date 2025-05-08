import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#42a5f5",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
});

const TABS = ["Предстоящие", "Текущие", "Завершенные"];

const generateTournaments = (type) =>
  Array.from({ length: 80 }, (_, i) => ({
    name: `${type} Турнир ${i + 1}`,
    start: "01.07.2025",
    duration: "5 ч. 17 мин.",
    format: "5x5",
    participants: `${Math.floor(Math.random() * 32)}/32`,
    prize: `${Math.floor(Math.random() * 10000)} ₽`,
    statusDate: "05.07.2025",
    status:
      type === "Предстоящие"
        ? "registration"
        : type === "Текущие"
        ? "inprogress"
        : i % 2 === 0
        ? "Завершён"
        : "Отменён",
  }));

const sampleData = {
  Предстоящие: generateTournaments("Предстоящие"),
  Текущие: generateTournaments("Текущие"),
  Завершенные: generateTournaments("Завершенные"),
};

function TournamentTable() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  const currentTab = TABS[tab];
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const handleChangeTab = (_, newValue) => {
    setTab(newValue);
    setPage(1);
  };

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setPage(1);
  };

  const data = sampleData[currentTab];
  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ width: "100%", p: 2 }}>
        {/* Tabs */}
        <Box sx={{ overflowX: "auto", mb: 2 }}>
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-flexContainer": {
                flexWrap: "nowrap",
                gap: 2,
              },
              "& .MuiTab-root": {
                color: "#888",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                whiteSpace: "nowrap",
              },
              "& .Mui-selected": {
                color: "#fff !important",
              },
              ".MuiTabs-indicator": {
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#42a5f5",
              },
            }}
          >
            {TABS.map((label) => (
              <Tab key={label} label={label} />
            ))}
          </Tabs>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            overflowX: isTablet ? "auto" : "visible",
            borderRadius: "16px", // полное закругление
            boxShadow: "none",
          }}
        >
          <Table
            size="small"
            sx={{
              minWidth: 800,
              borderCollapse: "separate",
              borderSpacing: 0,
            }}
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#2a2a2a" }}>
                <TableCell
                  sx={{
                    color: "#bbb",
                    fontWeight: 400,
                    py: 2,
                    px: 4, // увеличенный отступ слева
                    borderTopLeftRadius: "16px",
                  }}
                >
                  Турнир
                </TableCell>
                {["Начало", "Длительность", "Формат", "Участники", "Приз", "Статус"].map(
                  (col, idx, arr) => (
                    <TableCell
                      key={col}
                      align="center"
                      sx={{
                        color: "#bbb",
                        fontWeight: 400,
                        py: 2,
                        px: 2,
                        ...(idx === arr.length - 1 && {
                          borderTopRightRadius: "16px",
                        }),
                      }}
                    >
                      {col}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    backgroundColor: idx % 2 === 0 ? "#1e1e1e" : "#262626",
                    "&:last-child td:first-of-type": {
                      borderBottomLeftRadius: "16px", // низ таблицы
                    },
                    "&:last-child td:last-of-type": {
                      borderBottomRightRadius: "16px",
                    },
                    "& td": {
                      borderBottom: "none",
                      verticalAlign: "middle",
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      py: 1.5,
                      px: 2,
                    },
                  }}
                >
                  <TableCell sx={{ px: 4 }}>{row.name}</TableCell>
                  <TableCell align="center">{row.start}</TableCell>
                  <TableCell align="center">{row.duration}</TableCell>
                  <TableCell align="center">{row.format}</TableCell>
                  <TableCell align="center">{row.participants}</TableCell>
                  <TableCell align="center">{row.prize}</TableCell>
                  <TableCell align="center" sx={{ color: "#aaa" }}>
                    <Box sx={{ py: 1.5 }}>
                      {row.status === "registration" ? (
                        <>
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            sx={{
                              textTransform: "none",
                              minWidth: "140px",
                              mt: 2,
                              mb: 2,
                              color: "#fff",
                            }}
                          >
                            Регистрация
                          </Button>
                          <Typography
                            variant="caption"
                            display="block"
                            sx={{ lineHeight: 1.2 }}
                          >
                            Регистрация завершается
                          </Typography>
                          <Typography variant="caption" display="block">
                            {row.statusDate}
                          </Typography>
                        </>
                      ) : row.status === "inprogress" ? (
                        <Typography variant="body2">
                          Закончится <br />
                          {row.statusDate}
                        </Typography>
                      ) : (
                        <Typography variant="body2">{row.status}</Typography>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination and Rows Selector */}
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems={isMobile ? "stretch" : "center"}
          spacing={2}
          mt={2}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            siblingCount={1}
            boundaryCount={1}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#fff",
              },
              "& .Mui-selected": {
                border: "2px solid #42a5f5",
                borderRadius: "8px",
                fontWeight: "bold",
              },
              "& .MuiPaginationItem-ellipsis": {
                color: "#aaa",
              },
            }}
          />

          {!isTablet && (
            <Box display="flex" alignItems="center" gap={1}>
              <Typography color="#fff">Показывать по:</Typography>
              {[12, 36, 72].map((num) => (
                <Button
                  key={num}
                  variant={rowsPerPage === num ? "outlined" : "text"}
                  color="primary"
                  size="small"
                  onClick={() => handleRowsPerPageChange(num)}
                  sx={{
                    borderRadius: "8px",
                    borderColor: rowsPerPage === num ? "#42a5f5" : "transparent",
                    borderWidth: rowsPerPage === num ? "2px" : "1px",
                    color: "#fff",
                    minWidth: "44px",
                    height: "32px",
                    padding: "2px 8px",
                    "&:hover": {
                      backgroundColor: "#2a2a2a",
                    },
                  }}
                >
                  {num}
                </Button>
              ))}
            </Box>
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default TournamentTable;
