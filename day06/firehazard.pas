program firehazard;

uses
    Sysutils;

type
    Coord = record
        x : 0..999;
        y : 0..999;
    end;

    Action = (turnon, turnoff, toggle);

    Command = record
        action : Action;
        alpha : Coord;
        omega: Coord;
    end;

function ParseCoord (s : String) : Coord;
var
    p : Integer;
    c : Coord;
begin
    p := Pos(',', s);
    Val(Copy(s, 1, p-1), c.x);
    Val(Copy(s, p+1, Length(s)-p), c.y);

    ParseCoord := c;
end;

function ParseCommand (line : String) : Command;
var
    cmd : Command;
    p : Integer;
    a: String;
    o: String;
begin
    // parse action
    if Pos('toggle ', line) = 1 then
    begin
        cmd.action := toggle;
        Delete(line, 1, 7);
    end
    else
        if Pos('turn on', line) = 1 then
        begin
            cmd.action := turnon;
            Delete(line, 1, 8);
        end
        else
            if Pos('turn off', line) = 1 then
            begin
                cmd.action := turnoff;
                Delete(line, 1, 9);
            end;

    // parse alpha and omega
    p := Pos(' through ', line);
    a := Copy(line, 1, p-1);
    o := Copy(line, p+9, Length(line)-(p+8));

    cmd.alpha := ParseCoord(a);
    cmd.omega := ParseCoord(o);

    ParseCommand := cmd;
end;

var
    a: array [0..999, 0..999] of Boolean;
    i,j : Integer;
    c: LongInt = 0;
    cmd: Command;
    val: Boolean;
    line: String;
    f: Text;
    lc: Integer = 1;

procedure CountLights();
begin
    c := 0;
    for i:=0 to 999 do
        for j:=0 to 999 do
            if a[i,j] = true then
                c := c + 1;

    writeln(c, ' lights are burning');

end;

begin

Assign (f, 'input.txt');
    CountLights();

    Reset(f);
    while (not Eof(f)) and (lc <= 300) do
    begin
        ReadLn(f, line);
        cmd := ParseCommand(line);
        WriteLn(cmd.action, ' ', cmd.alpha.x, ',', cmd.alpha.y, ' through ', cmd.omega.x, ',', cmd.omega.y);
        lc := lc + 1;

        for i := cmd.alpha.x to cmd.omega.x do
            for j := cmd.alpha.y to cmd.omega.y do
            begin
                case cmd.action of
                    turnon : val := true;
                    turnoff : val := false;
                    toggle: val := not a[i,j];
                end;

                a[i,j] := val;
            end;

        CountLights();
    end;

end.

