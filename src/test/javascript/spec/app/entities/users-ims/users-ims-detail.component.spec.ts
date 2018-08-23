/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { UsersImsDetailComponent } from 'app/entities/users-ims/users-ims-detail.component';
import { UsersIms } from 'app/shared/model/users-ims.model';

describe('Component Tests', () => {
    describe('UsersIms Management Detail Component', () => {
        let comp: UsersImsDetailComponent;
        let fixture: ComponentFixture<UsersImsDetailComponent>;
        const route = ({ data: of({ users: new UsersIms(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [UsersImsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(UsersImsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(UsersImsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.users).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
