﻿using Antlr.Runtime.Tree;
using Hotel_Booking_System.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Hotel_Booking_System.Database
{
    public class RoomDAO
    {
        private readonly string connectionString = ConfigurationManager.ConnectionStrings["Hotelconnection"].ConnectionString;
        public List<Room> GetRooms()
        {
            List<Room> list = new List<Room>();
            string query = "SELECT * FROM room";
            SqlConnection con = new SqlConnection(connectionString);
            SqlCommand cmd = new SqlCommand(query, con);

            con.Open();
            SqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                string id = rdr["ID"].ToString();
                string type = rdr["type"].ToString();
                string desc = rdr["desc"].ToString();
                string area = rdr["area"].ToString();
                string capasity = rdr["capasity"].ToString();
                string price = rdr["price"].ToString();
                string bedtype = rdr["bedtype"].ToString();
                list.Add(new Room(Int32.Parse(id), type, desc, area, Int32.Parse(capasity), Int32.Parse(price), bedtype));
            }

            con.Close();
            cmd.Dispose();
            return list;
        }
        public int getFreeRoomIdByRoomHeading(string heading)
        {
            int id = -1;
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "select id from room where type = @type";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@roomtypeid", heading);
            SqlDataReader rdr = cmd.ExecuteReader();
            if (rdr.Read())
            {
                id = Convert.ToInt32(rdr["id"]);
            }
            rdr.Close();
            cmd.Dispose();
            con.Close();
            return id;
        }
        public List<int> getAllRoomsByRoomTypeId(int roomTypeId)
        {
            List<int> ans = new List<int>();
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "select * from eachroom where  roomtypeid = @roomtypeid";
            SqlCommand cmd = new SqlCommand(query, con);
            cmd.Parameters.AddWithValue("@roomtypeid", roomTypeId);
            SqlDataReader rdr = cmd.ExecuteReader();
            while(rdr.Read())
            {
                ans.Add(Convert.ToInt32(rdr["roomtypeid"]));
            }
            rdr.Close();
            cmd.Dispose();
            con.Close();
            return ans;
        }
        public List<int> getAllEachRoomsByReservationId(int rid)
        {
            List<int> ans = new List<int>();
            SqlConnection con = new SqlConnection(connectionString);
            con.Open();
            string query = "select eachroomid form reservationeachroom where reservationid = @rid";
            SqlCommand cmd = new SqlCommand(@query, con);
            cmd.Parameters.AddWithValue("@rid",rid);
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                ans.Add((int)rdr["eachroomid"]);
            }
            cmd.Dispose();
            con.Close();
            return  ans;
        }
    }
}