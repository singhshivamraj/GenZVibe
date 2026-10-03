import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import {
  Users,
  UserRound,
  Mail,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const AdminUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/auth/users", {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const data = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    };

    fetchUsers();
  }, [user]);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F8F7FC] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F2FF]">
                <Users className="h-5 w-5 text-[#6C47FF]" />
              </div>

              <span className="text-sm font-semibold text-[#6C47FF]">
                User Management
              </span>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-[#0F0B24] sm:text-3xl">
              User Directory
            </h1>

            <p className="mt-1 text-sm text-[#0F0B24]/55">
              View registered users and their account details.
            </p>
          </div>

          {/* User Count */}
          <div className="flex w-fit items-center gap-2 rounded-xl border border-[#0F0B24]/8 bg-white px-4 py-2.5 shadow-[0_8px_30px_-18px_rgba(15,11,36,0.35)]">
            <Users className="h-4 w-4 text-[#6C47FF]" />

            <span className="text-sm font-semibold text-[#0F0B24]">
              {users.length} Users
            </span>
          </div>
        </div>

        {/* Users Card */}
        <div className="overflow-hidden rounded-3xl border border-[#0F0B24]/8 bg-white shadow-[0_10px_35px_-20px_rgba(15,11,36,0.35)]">

          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-[#0F0B24]/8 px-5 py-4 sm:px-6">
            <div>
              <h2 className="text-base font-bold text-[#0F0B24]">
                All Users
              </h2>

              <p className="mt-0.5 text-xs text-[#0F0B24]/50">
                Registered accounts and their roles
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F2FF]">
              <UserRound className="h-4 w-4 text-[#6C47FF]" />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#0F0B24]/8 bg-[#FAF9FF]">
                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    ID
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    NAME
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    EMAIL
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    ROLE
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-bold tracking-wide text-[#0F0B24]/50">
                    JOINED
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.length > 0 ? (
                  users.map((u) => (
                    <tr
                      key={u._id}
                      className="border-b border-[#0F0B24]/6 transition hover:bg-[#FAF9FF]"
                    >
                      {/* ID */}
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-semibold text-[#0F0B24]">
                          {u._id.substring(0, 8)}...
                        </span>
                      </td>

                      {/* Name */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
                            <UserRound className="h-4 w-4 text-purple-600" />
                          </div>

                          <span className="text-sm font-semibold text-[#0F0B24]">
                            {u.name}
                          </span>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-[#0F0B24]/65">
                          <Mail className="h-4 w-4 text-[#6C47FF]" />
                          {u.email}
                        </div>
                      </td>

                      {/* Role */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${
                            u.role === "admin"
                              ? "border-orange-200 bg-orange-100 text-orange-600"
                              : "border-green-200 bg-green-100 text-green-700"
                          }`}
                        >
                          {u.role === "admin" ? (
                            <ShieldCheck className="h-3.5 w-3.5" />
                          ) : (
                            <UserRound className="h-3.5 w-3.5" />
                          )}

                          {u.role.toUpperCase()}
                        </span>
                      </td>

                      {/* Joined */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-[#0F0B24]/60">
                          <CalendarDays className="h-4 w-4" />

                          {new Date(u.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-14 text-center">
                      <Users className="mx-auto h-10 w-10 text-[#0F0B24]/20" />

                      <p className="mt-3 text-sm font-semibold text-[#0F0B24]">
                        No users found
                      </p>

                      <p className="mt-1 text-xs text-[#0F0B24]/50">
                        Registered users will appear here.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 p-4 md:hidden">
            {users.length > 0 ? (
              users.map((u) => (
                <div
                  key={u._id}
                  className="rounded-2xl border border-[#0F0B24]/8 bg-[#FAF9FF] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <UserRound className="h-4 w-4 text-purple-600" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-[#0F0B24]">
                          {u.name}
                        </p>

                        <p className="mt-0.5 break-all text-xs text-[#0F0B24]/55">
                          {u.email}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${
                        u.role === "admin"
                          ? "border-orange-200 bg-orange-100 text-orange-600"
                          : "border-green-200 bg-green-100 text-green-700"
                      }`}
                    >
                      {u.role.toUpperCase()}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-3">
                      <div className="flex items-center gap-1 text-xs text-[#0F0B24]/45">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        User ID
                      </div>

                      <p className="mt-1 font-mono text-xs font-bold text-[#0F0B24]">
                        {u._id.substring(0, 8)}...
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-3">
                      <div className="flex items-center gap-1 text-xs text-[#0F0B24]/45">
                        <CalendarDays className="h-3.5 w-3.5" />
                        Joined
                      </div>

                      <p className="mt-1 text-sm font-bold text-[#0F0B24]">
                        {new Date(u.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <Users className="mx-auto h-10 w-10 text-[#0F0B24]/20" />

                <p className="mt-3 text-sm font-semibold text-[#0F0B24]">
                  No users found
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[#0F0B24]/8 bg-[#FAF9FF] px-5 py-3.5 sm:px-6">
            <p className="text-xs font-semibold text-[#0F0B24]/50">
              Total Users:{" "}
              <span className="text-[#0F0B24]">{users.length}</span>
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
              <Users className="h-3.5 w-3.5" />
              User Directory
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;