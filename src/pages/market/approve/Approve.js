import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Approve = () => {
  const rowData = [
    {
      id: "jinwoo@naver.com",
      orderDate: "2022-11-08 05:08",
      creator: "김진우",
      nft: "도라에몽 에디션",
      price: 800,
      commission: 80,
      loyalty: null,
      method: "경매",
      detail: "2022-11-11 09:00 ~ 2022-11-16 09:00",
      note: "2022-11-15 09:00",
    },
    {
      id: "jinwoo1@naver.com",
      orderDate: "2022-11-08 05:08",
      creator: "김선미",
      nft: "도라에몽 에디션",
      price: 800,
      commission: 80,
      loyalty: null,
      method: "경매",
      detail: "2022-11-11 09:00 ~ 2022-11-16 09:00",
      note: "2022-11-15 09:00",
    },
    {
      id: "jinwoo2@naver.com",
      orderDate: "2022-11-08 05:08",
      creator: "강태현",
      nft: "도라에몽 에디션",
      price: 800,
      commission: 80,
      loyalty: null,
      method: "경매",
      detail: "2022-11-11 09:00 ~ 2022-11-16 09:00",
      note: "2022-11-15 09:00",
    },
    {
      id: "jinwoo3@naver.com",
      orderDate: "2022-11-08 05:08",
      creator: "이주희",
      nft: "도라에몽 에디션",
      price: 800,
      commission: 80,
      loyalty: null,
      method: "경매",
      detail: "2022-11-11 09:00 ~ 2022-11-16 09:00",
      note: "2022-11-15 09:00",
    },
    {
      id: "jinwoo4@naver.com",
      orderDate: "2022-11-08 05:08",
      creator: "김진우",
      nft: "도라에몽 에디션",
      price: 800,
      commission: 80,
      loyalty: null,
      method: "경매",
      detail: "2022-11-11 09:00 ~ 2022-11-16 09:00",
      note: "2022-11-15 09:00",
    },
    {
      id: "jinwoo5@naver.com",
      orderDate: "2022-11-08 05:08",
      creator: "김진우",
      nft: "도라에몽 에디션",
      price: 800,
      commission: 80,
      loyalty: null,
      method: "경매",
      detail: "2022-11-11 09:00 ~ 2022-11-16 09:00",
      note: "2022-11-15 09:00",
    },
  ];
  const columnData = [
    { field: "orderDate", headerName: "신청일자" },
    {
      field: "id",
      headerName: "아이디",
    },
    {
      field: "creator",
      headerName: "창작자",
    },
    {
      field: "nft",
      headerName: "상품",
    },
    {
      field: "price",
      headerName: "판매금액(토리)",
    },
    {
      field: "commission",
      headerName: "판매수수료",
    },
    {
      field: "loyalty",
      headerName: "로열티(절사)",
    },
    {
      field: "method",
      headerName: "판매방식",
    },
    {
      field: "detail",
      headerName: "판매상세",
    },
    {
      field: "change",
      headerName: "변경",
      width: 150,
      renderCell: (params) => (
        <>
          <button>승인</button>
          <button>반려</button>
          <button>취소</button>
        </>
      ),
    },
    {
      field: "note",
      headerName: "비고",
    },
  ];

  return (
    <div style={{ height: "calc(100vh - 70px)", width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columnData}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default Approve;
