"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Header() {
  return (
    <header className="items-center py-2 border-b">
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="my-auto">
          <Link href="/">
            <p className="font-bold">WDR LOGO</p>
          </Link>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">ログイン</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>ログイン</DialogTitle>
                <DialogDescription>
                  <div className="grid w-full items-center space-y-5 mt-3">
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス</Label>
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">パスワード</Label>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="grid space-y-3">
                      <Button>ログイン</Button>
                      <Button variant="outline">新規登録</Button>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
