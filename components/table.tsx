"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export type rowType = {
    id: string;
    titulo: string;
    descricao: string;
    prioridade: string;
    setor: string;
    status: string;
    usuario_id: number;
    tecnico_id: number | null;
    atendente_id: number | null;
    created_at: string;
    updated_at: string;
    resolved_at: string | null;
};

export type tableType = {
    rows: rowType[];
    columns: GridColDef[];
};

export default function Table({ rows, columns }: tableType) {
    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <Paper sx={{ height: 1000, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
