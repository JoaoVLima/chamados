"use client";

import Table from "@/components/table";
import { rowType } from "@/components/table";
import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [rows, setRows] = useState<rowType[]>([]);
    const [loading, setLoading] = useState(true);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "titulo", headerName: "Título", width: 200 },
        { field: "descricao", headerName: "Descrição", width: 300 },
        { field: "prioridade", headerName: "Prioridade", width: 120 },
        { field: "setor", headerName: "Setor", width: 150 },
        { field: "status", headerName: "Status", width: 120 },
        {
            field: "usuario_id",
            headerName: "Usuário ID",
            width: 100,
            type: "number",
        },
        {
            field: "tecnico_id",
            headerName: "Técnico ID",
            width: 100,
            type: "number",
        },
        {
            field: "atendente_id",
            headerName: "Atendente ID",
            width: 120,
            type: "number",
        },
        {
            field: "created_at",
            headerName: "Criado em",
            width: 180,
            valueFormatter: (value) => new Date(value).toLocaleString("pt-BR"),
        },
        {
            field: "updated_at",
            headerName: "Atualizado em",
            width: 180,
            valueFormatter: (value) => new Date(value).toLocaleString("pt-BR"),
        },
        {
            field: "resolved_at",
            headerName: "Resolvido em",
            width: 180,
            valueFormatter: (value) =>
                value ? new Date(value).toLocaleString("pt-BR") : "-",
        },
    ];

    useEffect(() => {
        axios
            .get("http://localhost:5000/chamados")
            .then(function (response) {
                setRows(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex min-h-screen w-screen text-black bg-zinc-50 font-sans">
            <main className="flex flex-col min-h-screen w-full xl:p-20 bg-white">
                <h1 className="text-4xl pb-10">Chamados</h1>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <Table rows={rows} columns={columns}></Table>
                )}
            </main>
        </div>
    );
}
